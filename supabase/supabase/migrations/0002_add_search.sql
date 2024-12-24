-- Enable the pg_trgm extension for text search
create extension if not exists pg_trgm;

-- Add search vector column to snippets
alter table snippets 
add column if not exists search_vector tsvector 
generated always as (
  setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
  setweight(to_tsvector('english', coalesce(content, '')), 'B')
) stored;

-- Create GIN index for fast text search
create index if not exists snippets_search_idx 
on snippets using gin(search_vector);

-- Create trigger to update search_vector on changes
create or replace function snippets_search_update() returns trigger as $$
begin
  new.search_vector := 
    setweight(to_tsvector('english', coalesce(new.title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(new.content, '')), 'B');
  return new;
end
$$ language plpgsql;

create trigger snippets_search_update
before insert or update on snippets
for each row
execute function snippets_search_update(); 
