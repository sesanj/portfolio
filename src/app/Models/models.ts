export interface Heading {
  tag: string;
  title: string;
  description: string;
}

export interface ProjectInfo {
  title: string;
  shortDescription: string;
  tech: string[];
  cardImage: string;
  images: string[];
  techStack: { name: string; icon: string }[];
  stats: { lines: string; team: string; duration: string; commits: string };
  longDescription: string;
  teamMembers: { name: string; role: string; photo: string }[];
  contribution: { role: string; tasks: string[] };
  links: { website?: string; github: string };
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
