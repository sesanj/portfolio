import { Component, ElementRef, Renderer2 } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { Heading } from '../../Models/models';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [HeadingComponent, NgFor, NgClass],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  heading: Heading = {
    tag: 'MY TOOLBOX',
    title: 'Tech, Tools & Skills',
    description:
      'A collection of languages, frameworks, and tools that power my development workflow and projects.',
    // 'From backend to frontend, discover the range of tools, technologies, and skills I use to build efficient digital products.'
  };

  skillCategories = [
    {
      name: 'Languages',
      colorClass: 'category-languages',
      skills: [
        { icon: 'devicon-java-plain', name: 'Java' },
        { icon: 'devicon-javascript-plain', name: 'JavaScript' },
        { icon: 'devicon-html5-plain', name: 'HTML5' },
        // { icon: 'devicon-php-plain', name: 'PHP' },
        { icon: 'devicon-swift-plain', name: 'Swift' },
        { icon: 'devicon-typescript-plain', name: 'TypeScript' },
        // { icon: 'devicon-kotlin-plain', name: 'Kotlin' },
        { icon: 'devicon-css3-plain', name: 'CSS3' },
      ],
    },

    {
      name: 'AI Tools 💡',
      colorClass: 'category-ai',
      skills: [
        { icon: 'devicon-chatgpt-plain', name: 'ChatGPT' },
        { icon: 'devicon-grok-plain', name: 'Grok' },
        { icon: 'devicon-deepseek-plain', name: 'DeepSeek' },
        { icon: 'devicon-copilot-plain', name: 'GitHub Copilot' },
        { icon: 'devicon-lovable-plain', name: 'Lovable' },
      ],
    },

    {
      name: 'Tools & Tech',
      colorClass: 'category-tools',
      skills: [
        { icon: 'devicon-git-plain', name: 'Git' },
        { icon: 'devicon-mysql-plain', name: 'MySQL' },
        { icon: 'devicon-canva-plain', name: 'Canva' },
        { icon: 'devicon-mongodb-plain', name: 'MongoDB' },
        { icon: 'devicon-intellij-plain', name: 'IntelliJ' },
        { icon: 'devicon-github-plain', name: 'GitHub' },
        // { icon: 'devicon-figma-plain', name: 'Figma' },

        { icon: 'devicon-vscode-plain', name: 'VSCode' },
        { icon: 'devicon-swift-plain', name: 'Xcode' },
        // { icon: 'devicon-sass-plain', name: 'SCSS' },
      ],
    },

    {
      name: 'Frameworks & Libraries',
      colorClass: 'category-frameworks',
      skills: [
        { icon: 'devicon-angular-plain', name: 'Angular' },
        { icon: 'devicon-laravel-plain', name: 'Laravel' },
        { icon: 'devicon-express-original', name: 'Express.js' },
        { icon: 'devicon-java-plain', name: 'JavaFX' },
        { icon: 'devicon-nodejs-plain', name: 'Node.js' },
      ],
    },
  ];

  softSkills = [
    { name: 'Communication', level: 90 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Teamwork', level: 88 },
    { name: 'Fast Learner', level: 95 },
    { name: 'Flexible & Adaptive', level: 80 },
    { name: 'Ability To Work Under Pressure', level: 90 },
    { name: 'Attention To Detail', level: 90 },
    { name: 'Debugging', level: 75 },
  ];

  getBarColor(level: number): string {
    if (level >= 85) return '#28a745'; // green
    if (level >= 76) return '#ffc107'; // yellow
    if (level >= 50) return '#fd7e14'; // orange
    return '#dc3545'; // red
  }
}
