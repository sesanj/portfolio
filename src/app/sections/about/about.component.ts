import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { Heading } from '../../Models/models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  heading: Heading = {
    tag: 'ABOUT ME',
    title: 'Beyond Coding',
    description:
      'A glimpse into my world. What I do for fun, and what inspires me.',
  };
}
