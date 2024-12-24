export type Language =
  | 'javascript'
  | 'typescript'
  | 'python'
  | 'mdx'
  | 'css'
  | 'bash'
  | 'shell'
  | 'json';

export type Framework = 'Flask' | 'NextJS' | 'React';

export interface Version {
  id: string;
  code: string;
  timestamp: string;
  message?: string;
}

export interface Snippet {
  id: string;
  folderId: string | null;
  title: string;
  code: string;
  language: Language;
  description: string;
  frameworks: Framework[];
  githubUrl?: string;
  localPath?: string;
  labels: string[];
  createdAt: string;
  updatedAt: string;
  versions: Version[];
  isDraft: boolean;
  lastPublishedAt?: string;
}