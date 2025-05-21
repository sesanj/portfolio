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

export interface WorkCard {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  website: string;
  image: string;
}

export interface Testimony {
  image: string;
  name: string;
  tag: string;
  description: string;
}
