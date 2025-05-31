import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  openMenu: boolean = false;

  open() {
    this.openMenu = true;
  }

  close() {
    this.openMenu = false;
  }

  stop(event: Event) {
    event.stopPropagation();
  }
}
