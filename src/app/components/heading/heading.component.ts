import { Component, Input } from '@angular/core';
import { Heading } from '../../Models/models';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css',
})
export class HeadingComponent {
  @Input({ required: true }) heading!: Heading;
}
