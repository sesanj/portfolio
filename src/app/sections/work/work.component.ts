import { Component, Input } from '@angular/core';
import { Heading, WorkCard } from '../../Models/models';
import { WorkData } from '../../../Data/work';
import { HeadingComponent } from '../../components/heading/heading.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent {
  workExperiences: WorkCard[] = WorkData;

  heading: Heading = {
    tag: 'WORK EXPERIENCE',
    title: 'Professional Experience',
    description:
      'A highlight of my work experience as a web developer showcasing my skills and tools I have worked with',
  };
}
