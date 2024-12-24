import { Language } from './language';
import { Framework } from './framework';
import { Version } from './version';

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