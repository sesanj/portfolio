import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { Heading, Testimony } from '../../Models/models';
import { Testiminials } from '../../../Data/testimonials';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css',
})
export class TestimonialComponent {
  heading: Heading = {
    tag: 'Testimonials',
    title: 'What People Say About Me',
    description:
      "Don't just take my word for it. See what my team, friends and others have to say about my work.",
  };

  testimonials: Testimony[] = Testiminials;
}
