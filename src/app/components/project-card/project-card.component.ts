import { Component, Input } from '@angular/core';
import { ProjectInfo } from '../../Models/models';
import { ProjectInfoComponent } from '../project-info/project-info.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ProjectInfoComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: ProjectInfo;
  displayInfo: boolean = false;

  display() {
    console.log('Is displaying: ', this.displayInfo);
    this.displayInfo = true;

    console.log('After Click: ', this.displayInfo);
  }

  productIsClosed(event: boolean) {
    this.displayInfo = event;
  }
}
