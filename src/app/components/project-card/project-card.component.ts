import { Component, inject, Input } from '@angular/core';
import { ProjectInfo } from '../../Models/models';
import { ProjectInfoComponent } from '../project-info/project-info.component';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ProjectInfoComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: ProjectInfo;
  contactService = inject(ContactService);

  display() {
    this.contactService.displayInfo = true;
  }

  projectIsClosed(event: boolean) {
    if (event === true) {
      this.contactService.displayInfo = false;
    }
  }
}
