export interface Projects {
  id: string | number;
  title: string;
  description: string;
  coverImage: string;
  githubUrl: string;
  demoUrl?: string;
  roles: string[]; 
  techStack: string[];
  peopleInProject: number;
  status: 'completed' | 'in-progress' | 'archived';
  featured: boolean;
  pinned: boolean;
}