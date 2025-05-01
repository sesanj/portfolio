import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { delay, timeInterval, timeout } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),

    trigger('fadeInDelay', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(
          '800ms  ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),

    trigger('fadeInDelay2', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(
          '1000ms  ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class HeroComponent {
  phrases = [
    'Full Stack Web Developer.',
    'Computer Programmer.',
    'UI/UX Designer.',
    'Software Developer.',
  ];
  currentPhraseIndex = 0;
  currentText = '';
  isDeleting = false;

  shootStar = true;

  ngOnInit() {
    this.typeText();
    this.shoot();
  }

  typeText() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    const fullText = currentPhrase;
    const typingSpeed = 100;
    const deletingSpeed = 50;

    if (this.isDeleting) {
      this.currentText = fullText.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = fullText.substring(0, this.currentText.length + 1);
    }

    const typedTextElement = document.querySelector('.typed-text');
    if (typedTextElement) {
      typedTextElement.textContent = this.currentText;
    }

    let delay = this.isDeleting ? deletingSpeed : typingSpeed;

    if (!this.isDeleting && this.currentText === fullText) {
      delay = 1500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentPhraseIndex =
        (this.currentPhraseIndex + 1) % this.phrases.length;
      delay = 800;
    }

    setTimeout(() => this.typeText(), delay);
  }

  scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  shoot() {
    setInterval(() => {
      if (this.shootStar) {
        this.shootStar = false;
      } else if (!this.shootStar) {
        this.shootStar = true;
      }
    }, 4000);
  }
}
