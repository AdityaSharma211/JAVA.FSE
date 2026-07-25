import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseSummaryWidgetComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';

  // Two-way bound via [(ngModel)]. This is shorthand for
  // [ngModel]="searchTerm" (ngModelChange)="searchTerm = $event" -
  // i.e. component -> DOM (one-way) plus DOM -> component (event binding)
  // combined into one syntax.
  searchTerm = '';

  enrolledCount = 3;
  gpa = 3.8;
  coursesAvailable = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    console.log('HomeComponent initialised — courses loaded');
    this.courseService.getCourses().subscribe((courses) => {
      this.coursesAvailable = courses.length;
    });
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
