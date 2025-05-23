import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { EducationComponent } from './sections/education/education.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { WorkComponent } from './sections/work/work.component';
import * as AOS from 'aos';
import { TestimonialComponent } from './sections/testimonial/testimonial.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    ProjectsComponent,
    EducationComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    WorkComponent,
    TestimonialComponent,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    // });
  }

  // ngAfterViewInit() {
  //   AOS.refresh();
  // }
}
