import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CanComponentDeactivate } from '../../guards/unsaved-changes.guard';

// Custom synchronous validator: disallows course codes starting with 'XX'.
export function noCourseCodeValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (typeof value === 'string' && value.toUpperCase().startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// Custom async validator: simulates an API check for an already-taken email.
// Async validators run only after sync validators pass, avoiding
// unnecessary API calls for obviously invalid input.
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const value = (control.value ?? '') as string;
      resolve(value.includes('test@') ? { emailTaken: true } : null);
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrls: ['./reactive-enrollment-form.component.css'],
})
export class ReactiveEnrollmentFormComponent implements OnInit, CanComponentDeactivate {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: this.fb.control(
        '',
        [Validators.required, Validators.email],
        [simulateEmailCheck]
      ),
      courseId: [null, [Validators.required, noCourseCodeValidator]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([]),
    });
  }

  // Typed getter avoids repeated `as FormArray` casts in the template and
  // keeps the cast logic in one place.
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(new FormControl('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    // .value excludes disabled controls; .getRawValue() includes all
    // controls regardless of disabled state.
    console.log('Reactive form value:', this.enrollForm.value);
    console.log('Reactive form raw value:', this.enrollForm.getRawValue());
  }

  hasUnsavedChanges(): boolean {
    return this.enrollForm.dirty;
  }
}
