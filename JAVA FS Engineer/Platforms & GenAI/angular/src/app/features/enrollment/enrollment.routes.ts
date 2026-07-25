import { Routes } from '@angular/router';
import { unsavedChangesGuard } from '../../guards/unsaved-changes.guard';

// Lazy-loaded feature routes for the enrollment forms. Angular downloads
// this chunk only when the user first navigates to /enroll, not on initial
// app load - verifiable in Chrome DevTools > Network as a separate JS chunk.
export const ENROLLMENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../pages/enrollment-form/enrollment-form.component').then(
        (m) => m.EnrollmentFormComponent
      ),
  },
  {
    path: 'reactive',
    loadComponent: () =>
      import('../../pages/reactive-enrollment-form/reactive-enrollment-form.component').then(
        (m) => m.ReactiveEnrollmentFormComponent
      ),
    canDeactivate: [unsavedChangesGuard],
  },
];
