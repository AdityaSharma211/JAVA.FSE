import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;
  students$: Observable<string[]> = of([]);

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(id).subscribe((course) => {
      this.course = course;
    });

    // switchMap cancels the previous inner Observable (getStudentsByCourse
    // for a stale courseId) if a new courseId arrives before it completes -
    // preventing out-of-order responses from an earlier navigation.
    this.students$ = of(id).pipe(
      switchMap((courseId) => this.enrollmentService.getStudentsByCourse(courseId))
    );
  }
}
