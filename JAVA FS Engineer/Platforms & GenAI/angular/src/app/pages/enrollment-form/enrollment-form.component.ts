import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css'],
})
export class EnrollmentFormComponent {
  submitted = false;

  model = {
    studentName: '',
    studentEmail: '',
    courseId: null as number | null,
    preferredSemester: 'Odd',
    agreeToTerms: false,
  };

  onSubmit(form: NgForm): void {
    console.log('Template-driven form value:', form.value);
    console.log('Template-driven form valid:', form.valid);
    if (form.valid) {
      this.submitted = true;
    }
  }
}
