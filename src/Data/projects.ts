import { ProjectInfo } from '../app/Models/models';

export const Projects: ProjectInfo[] = [
  {
    title: 'Property Pro',
    shortDescription:
      'A Database Management Software designed to manage a Real-Estate business.',
    tech: ['Java', 'JavaFx', 'SQL', 'Gradle', 'CSS'],
    cardImage: 'PropertyProOverview.png',
    images: [
      'PropertyProLogin.png',
      'PropertyProOverview.png',
      'PropertyProProperty.png',
      'PropertyProClient.png',
      'PropertyProRevenue.png',
    ],
    techStack: [
      { icon: 'devicon-java-plain', name: 'JavaFX' },
      { icon: 'devicon-intellij-plain', name: 'IntelliJ' },
      { icon: 'devicon-mysql-plain', name: 'MySQL' },
      { icon: 'devicon-css3-plain', name: 'CSS3' },
      { icon: 'devicon-java-plain', name: 'Java' },
      { icon: 'devicon-git-plain', name: 'Git' },
      { icon: 'devicon-github-plain', name: 'GitHub' },
    ],
    stats: { lines: '15,000', team: '4', duration: '2 Months', commits: '149' },
    longDescription:
      'Property pro is a database management system used to track and manage a real estate business. It keeps track of clients/guest information, properties owned by the business and all data related to generated revenue. Businesses can perform certain operations like updating, creating, retrieving and deleting data from the database. These data includes properties, transactions and clients.',
    teamMembers: [
      {
        photo: 'myPicture.jpeg',
        role: 'Team Leader',
        name: 'Sesan Popoola',
      },
      {
        photo: 'avatars/avatar3.png',
        role: 'Team Member',
        name: 'Aarav Abraham',
      },
      {
        photo: 'avatars/avatar4.png',
        role: 'Team Member',
        name: 'Irene Eweka',
      },
      {
        photo: 'avatars/avatar2.png',
        role: 'Team Member',
        name: 'Emilin Syju',
      },
    ],
    contribution: {
      role: 'Project & Team Lead',
      tasks: [
        'Application Design',
        'Logic Implementation',
        'Theme and Layout Development',
        'Database Normalization',
        'Team and Task Management',
        'Conflict Resolution',
      ],
    },
    links: { website: '', github: 'https://github.com/sesanj/Property-Pro' },
  },

  {
    title: 'Trendly',
    shortDescription:
      'A Modern E-Commerce shopping Web Application designed for a fashion brand.',
    tech: ['Angular', 'TypeScript', 'CSS3', 'HTML5'],
    cardImage: 'trendly.png',
    images: [
      'trendlyHome.png',
      'trendlyDashboard.png',
      'trendlyProduct.png',
      'trendlyShop.png',
      'trendlyCart.png',
    ],
    techStack: [
      { icon: 'devicon-angular-plain', name: 'Angular' },
      { icon: 'devicon-vscode-plain', name: 'VSCode' },
      { icon: 'devicon-html5-plain', name: 'HTML5' },
      { icon: 'devicon-css3-plain', name: 'CSS3' },
      { icon: 'devicon-git-plain', name: 'Git' },
      { icon: 'devicon-typescript-plain', name: 'TypeScript' },
      { icon: 'devicon-github-plain', name: 'GitHub' },
      { icon: 'devicon-express-original', name: 'Express.js' },
      { icon: 'devicon-canva-plain', name: 'Canva' },
    ],
    stats: { lines: '12,000', team: '4', duration: '3 Months', commits: '176' },
    longDescription:
      'Trendly is a modern Angular-based e-commerce web application designed for a fashion brand. It offers a sleek, responsive design and a comprehensive suite of features for customers and administrators, such as user authentication, order management, cart functionality, and product exploration. The app is structured to ensure smooth navigation and optimized performance across different devices.',
    teamMembers: [
      {
        photo: 'myPicture.jpeg',
        role: 'Team Leader',
        name: 'Sesan Popoola',
      },
      {
        photo: 'avatars/avatar3.png',
        role: 'Team Member',
        name: 'Aarav Vimalkumar Rathod',
      },
      {
        photo: 'avatars/avatar4.png',
        role: 'Team Member',
        name: 'Lujia Yang',
      },
      {
        photo: 'avatars/avatar2.png',
        role: 'Team Member',
        name: 'Emilin Syju',
      },
    ],
    contribution: {
      role: 'Project & Team Lead',
      tasks: [
        'Application Design',
        'Logic Implementation',
        'Layout Design',
        'Backend Development With Express Js',
        'Restful API Implementation',
        'Team and Task Management',
        'Conflict Resolution',
      ],
    },
    links: {
      website: 'https://trendly-three.vercel.app/',
      github: 'https://github.com/sesanj/Trendly',
    },
  },

  {
    title: 'Dice Split',
    shortDescription:
      'An engaging desktop dice game where players roll dice to achieve high scores.',
    tech: ['JavaFx', 'Java', 'CSS', 'IntelliJ'],
    cardImage: 'diceSplit.png',
    images: ['diceSplit.png', 'diceSplit2.png'],
    techStack: [
      { icon: 'devicon-java-plain', name: 'JavaFX' },
      { icon: 'devicon-intellij-plain', name: 'IntelliJ' },
      { icon: 'devicon-css3-plain', name: 'CSS3' },
      { icon: 'devicon-java-plain', name: 'Java' },
    ],
    stats: { lines: '2,000', team: '2', duration: '2 Months', commits: '1' },
    longDescription:
      'Dice Split is an engaging desktop game where players roll dice to achieve high scores. The game keeps track of the highest score achieved, allowing players to challenge themselves and others. The application features a simple user interface and includes sound effects, animations and file I/O to enhance the gaming experience.',
    teamMembers: [
      {
        photo: 'myPicture.jpeg',
        role: 'Team Leader',
        name: 'Sesan Popoola',
      },
      {
        photo: 'avatars/avatar3.png',
        role: 'Team Member',
        name: 'Abdul Aziz',
      },
    ],
    contribution: {
      role: 'Project & Team Lead',
      tasks: [
        'Application Design',
        'Logic Implementation',
        'Theme and Layout Design',
        'Team and Task Management',
        'Conflict Resolution',
      ],
    },
    links: { website: '', github: 'https://github.com/sesanj/Dice-Split' },
  },
];
