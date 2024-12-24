/*
  # Initial Schema Setup for Code Snippet Manager

  1. Tables
    - folders: Organizational structure for snippets
    - snippets: Main table for code snippets
    - snippet_versions: Version history for snippets

  2. Security
    - RLS enabled on all tables
    - Policies for user-based access control

  3. Indexes
    - Optimized for common queries
    - Full-text search capabilities
*/

-- Enable pgcrypto for UUID generation
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Folders table (must be created first due to foreign key relationships)
CREATE TABLE IF NOT EXISTS folders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  parent_id UUID REFERENCES folders(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Snippets table
CREATE TABLE IF NOT EXISTS snippets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  code TEXT NOT NULL,
  language TEXT NOT NULL,
  description TEXT,
  frameworks TEXT[] DEFAULT '{}',
  labels TEXT[] DEFAULT '{}',
  github_url TEXT,
  local_path TEXT,
  user_id UUID NOT NULL,
  folder_id UUID REFERENCES folders(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  is_public BOOLEAN DEFAULT false,
  
  -- Add search vector for full-text search
  search_vector tsvector GENERATED ALWAYS AS (
    setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(description, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(code, '')), 'C')
  ) STORED
);

-- Snippet versions table
CREATE TABLE IF NOT EXISTS snippet_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  snippet_id UUID NOT NULL REFERENCES snippets(id) ON DELETE CASCADE,
  code TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  user_id UUID NOT NULL
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_snippets_user_id ON snippets(user_id);
CREATE INDEX IF NOT EXISTS idx_snippets_folder_id ON snippets(folder_id);
CREATE INDEX IF NOT EXISTS idx_snippets_search ON snippets USING gin(search_vector);
CREATE INDEX IF NOT EXISTS idx_snippet_versions_snippet_id ON snippet_versions(snippet_id);
CREATE INDEX IF NOT EXISTS idx_folders_user_id ON folders(user_id);
CREATE INDEX IF NOT EXISTS idx_folders_parent_id ON folders(parent_id);

-- Enable Row Level Security
ALTER TABLE folders ENABLE ROW LEVEL SECURITY;
ALTER TABLE snippets ENABLE ROW LEVEL SECURITY;
ALTER TABLE snippet_versions ENABLE ROW LEVEL SECURITY;

-- Policies for folders
CREATE POLICY "Users can view their own folders"
  ON folders FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own folders"
  ON folders FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own folders"
  ON folders FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own folders"
  ON folders FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Policies for snippets
CREATE POLICY "Users can view their own snippets"
  ON snippets FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR is_public = true);

CREATE POLICY "Users can create their own snippets"
  ON snippets FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own snippets"
  ON snippets FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own snippets"
  ON snippets FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Policies for snippet versions
CREATE POLICY "Users can view versions of accessible snippets"
  ON snippet_versions FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM snippets s
    WHERE s.id = snippet_id
    AND (s.user_id = auth.uid() OR s.is_public = true)
  ));

CREATE POLICY "Users can create versions for their snippets"
  ON snippet_versions FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = user_id AND
    EXISTS (
      SELECT 1 FROM snippets s
      WHERE s.id = snippet_id AND s.user_id = auth.uid()
    )
  );

-- Functions for maintaining updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_snippets_updated_at
  BEFORE UPDATE ON snippets
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_folders_updated_at
  BEFORE UPDATE ON folders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();