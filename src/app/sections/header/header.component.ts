import { Component, inject } from '@angular/core';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  openMenu: boolean = false;
  contactService = inject(ContactService);

  open() {
    this.openMenu = true;
  }

  close() {
    this.openMenu = false;
  }

  closeInfo() {
    this.contactService.displayInfo = false;
  }

  stop(event: Event) {
    event.stopPropagation();
  }
}
