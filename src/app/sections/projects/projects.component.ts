import { Component, inject } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { Heading, ProjectInfo } from '../../Models/models';
import { Projects } from '../../../Data/projects';
import { ProjectInfoComponent } from '../../components/project-info/project-info.component';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeadingComponent, ProjectCardComponent, ProjectInfoComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  heading: Heading = {
    tag: 'REAL-WORLD RESULTS',
    title: 'Recent Projects',
    description:
      'Here are some of my recently completed projects, crafted with obsession for clean, user experience.',
  };

  projectService = inject(ProjectService);

  projects: ProjectInfo[] = Projects;
}
