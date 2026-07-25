import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private enrolledCourseIds: number[] = [];

  // Service-to-service injection: EnrollmentService depends on CourseService
  // to resolve enrolled IDs into full Course objects - a layered pattern
  // similar to a backend service layer.
  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter((id) => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Observable<Course[]> {
    return this.courseService
      .getCourses()
      .pipe(map((courses) => courses.filter((c) => this.enrolledCourseIds.includes(c.id))));
  }

  getStudentsByCourse(courseId: number): Observable<string[]> {
    // Simulated endpoint - in a real app this would call the backend.
    return new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next(['Aditi Rao', 'Rahul Mehta', 'Sara Khan']);
        subscriber.complete();
      }, 300);
    });
  }
}
