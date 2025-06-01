import { Component, inject } from '@angular/core';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  openMenu: boolean = false;
  projectService = inject(ProjectService);

  open() {
    this.openMenu = true;
  }

  close() {
    this.openMenu = false;
  }

  closeInfo() {
    this.projectService.displayInfo = false;
  }

  stop(event: Event) {
    event.stopPropagation();
  }
}
