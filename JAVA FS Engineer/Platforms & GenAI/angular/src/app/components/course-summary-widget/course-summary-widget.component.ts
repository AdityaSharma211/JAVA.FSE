import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';

// Demonstrates that CourseService (providedIn: 'root') is a true singleton:
// this widget and HomeComponent/CourseListComponent all read from the same
// service instance, so adding a course anywhere updates the count everywhere.
@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  template: `<p class="widget">Total courses (live from shared service): {{ count }}</p>`,
  styles: [`.widget { background: #eef4ff; padding: 0.5rem 1rem; border-radius: 6px; }`],
})
export class CourseSummaryWidgetComponent implements OnInit {
  count = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => (this.count = courses.length));
  }
}
