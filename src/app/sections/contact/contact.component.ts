import { Component } from '@angular/core';
import { Heading } from '../../Models/models';
import { HeadingComponent } from '../../components/heading/heading.component';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeadingComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  heading: Heading = {
    tag: 'Contact Me',
    title: 'Available For Hire',
    description:
      "Ready to bring your next project or an already existing project to life? Let's connect and discuss how I can help you achieve your goals.",
  };

  formData = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail(form: any) {
    if (form.valid) {
      emailjs
        .send(
          'service_tnu4mpk',
          'template_aphem1u',
          {
            name: this.formData.name,
            email: this.formData.email,
            message: this.formData.message,
          },
          'DVLh8yT_3Okf9Q8rO'
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            console.log(form.value.name);
            form.reset();
          },
          (error) => {
            console.log('FAILED...', error);
          }
        );
    } else {
      console.log('Form is invalid');
    }
  }
}
