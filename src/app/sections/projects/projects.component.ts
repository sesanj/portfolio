import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { Heading, ProjectCard } from '../../Models/models';
import { Projects } from '../../../Data/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, HeadingComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  heading: Heading = {
    tag: 'REAL-WORLD RESULTS',
    title: 'Recent Projects',
    description:
      'Here are some of my recently completed projects, crafted with obsession for clean, performant code',
  };

  projects: ProjectCard[] = Projects;
}
