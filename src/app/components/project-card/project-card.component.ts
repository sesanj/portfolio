import { Component, Input } from '@angular/core';
import { ProjectCard } from '../../Models/models';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: ProjectCard;
}
