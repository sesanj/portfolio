import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { Heading } from '../../Models/models';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  heading: Heading = {
    tag: 'LEARNED FROM THE BEST',
    title: 'Education Background',
    description:
      'A brief overview of my educational background as a Computer Engineer and Programmer ',
  };
}
