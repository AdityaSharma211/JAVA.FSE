import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Course } from '../models/course.model';

const API_URL = 'http://localhost:3000/courses';

// providedIn: 'root' makes this service a singleton - one instance shared
// across the whole app. Every component that injects CourseService gets
// the exact same instance, which is why HomeComponent, CourseListComponent
// and CourseSummaryWidget all stay in sync automatically.
@Injectable({ providedIn: 'root' })
export class CourseService {
  // Local fallback data used only if json-server is not running,
  // so the app remains demoable without the mock API.
  private localCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Operating Systems', code: 'CS102', credits: 3, gradeStatus: 'pending' },
    { id: 3, name: 'Database Systems', code: 'CS103', credits: 4, gradeStatus: 'failed' },
    { id: 4, name: 'Computer Networks', code: 'CS104', credits: 3, gradeStatus: 'pending' },
    { id: 5, name: 'Web Development', code: 'CS105', credits: 2, gradeStatus: 'passed' },
  ];

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(API_URL).pipe(
      tap((courses) => console.log('Courses loaded:', courses.length)),
      map((courses) => courses.filter((c) => c.credits > 0)),
      retry(2),
      catchError((err) => {
        console.error('HTTP error, falling back to local data', err);
        // Fallback keeps Task flows demoable without json-server running.
        return of(this.localCourses);
      })
    );
  }

  getCourseById(id: number): Observable<Course | undefined> {
    return this.http.get<Course>(`${API_URL}/${id}`).pipe(
      catchError(() => {
        const found = this.localCourses.find((c) => c.id === id);
        return of(found);
      })
    );
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(API_URL, course).pipe(
      catchError((err) => throwError(() => new Error('Failed to create course.')))
    );
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${API_URL}/${course.id}`, course).pipe(
      catchError((err) => throwError(() => new Error('Failed to update course.')))
    );
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`).pipe(
      catchError((err) => throwError(() => new Error('Failed to delete course.')))
    );
  }
}
