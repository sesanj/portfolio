import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ProjectInfo } from '../../Models/models';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.css',
})
export class ProjectInfoComponent {
  @Input({ required: true }) projectInfo!: ProjectInfo;

  @Input({ required: true }) displayProjectInfo!: boolean;
  projectService = inject(ProjectService);

  currentIndex: number = 0;

  close() {
    this.projectService.displayInfo = false;
  }

  get getTransform() {
    return `translateX(-${this.currentIndex * (100 / 1)}%)`;
  }

  // Navigate to the previous slide
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.projectInfo.images.length - 1;
    }
  }

  // Navigate to the next slide
  nextSlide() {
    if (this.currentIndex < this.projectInfo.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}
