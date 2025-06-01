import { Component, inject, Input } from '@angular/core';
import { ProjectInfo } from '../../Models/models';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: ProjectInfo;
  projectService = inject(ProjectService);

  display() {
    this.projectService.displayInfo = true;
    this.projectService.setProjectInfo(this.project);
  }
}
