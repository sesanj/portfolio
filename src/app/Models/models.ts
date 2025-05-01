export interface Heading {
  tag: string;
  title: string;
  description: string;
}

export interface ProjectCard {
  title: string;
  description: string;
  tech: string[];
  github: string;
  url?: string;
  image: string;
}
