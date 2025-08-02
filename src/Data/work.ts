import { WorkCard } from '../app/Models/models';

export const WorkData: WorkCard[] = [
  {
    company: 'Tareti LTD - (Hybrid)',
    role: 'Web Developer',
    period: 'Nov 2022 - Dec 2023',
    location: 'Abuja, Nigeria',
    description: [
      'I Worked directly with stakeholders to gather and document project requirements.',
      'Designed responsive UI using Angular framework for cross-browser and device compatibility.',
      'Collaborated within an agile team to build retail-focused web applications.',
      'Integrated Angular frontend with backend services by consuming RESTful APIs via HttpClient.',
    ],
    // logo: '',
    website: '',
    techStack: [
      { icon: 'devicon-angular-plain', name: 'Angular' },
      { icon: 'devicon-typescript-plain', name: 'TypeScript' },
      { icon: 'devicon-html5-plain', name: 'HTML5' },
      { icon: 'devicon-css3-plain', name: 'CSS3' },
      { icon: 'devicon-git-plain', name: 'Git' },
      { icon: 'devicon-javascript-plain', name: 'JavaScript' },
      { icon: 'devicon-express-original', name: 'Express.js' },
      { icon: 'devicon-vscode-plain', name: 'VSCode' },
      { icon: 'devicon-canva-plain', name: 'Canva' },
    ],
  },
  {
    company: 'Daratan Foods LTD - (Hybrid)',
    role: 'Front-End Developer',
    period: 'Sep 2021 - Oct 2022',
    location: 'Tbilisi, Georgia',
    description: [
      'Built a responsive website using HTML5, CSS3, JavaScript, WordPress, Elementor Pro, and Essential Plugins',
      'Identified and resolved 20+ technical issues on the live site',
      'Optimized website for mobile responsiveness and SEO best practices.',
      'Gathered and documented project requirements for web updates and improvements.',
    ],
    // logo: 'daratanLogo.png',
    website: 'https://daratanfoods.ge/',
    techStack: [
      { icon: 'devicon-html5-plain', name: 'HTML5' },
      { icon: 'devicon-css3-plain', name: 'CSS3' },
      { icon: 'devicon-javascript-plain', name: 'JavaScript' },
      { icon: 'devicon-vscode-plain', name: 'VSCode' },
      { icon: 'devicon-canva-plain', name: 'Canva' },
    ],
  },
];
