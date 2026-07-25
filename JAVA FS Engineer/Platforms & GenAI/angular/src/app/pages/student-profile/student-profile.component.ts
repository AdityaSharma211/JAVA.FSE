import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';
import { NotificationComponent } from '../../components/notification/notification.component';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, NotificationComponent],
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css'],
})
export class StudentProfileComponent implements OnInit {
  enrolledCourses$: Observable<Course[]>;
  studentName = 'Aditi Rao';

  constructor(private store: Store) {
    this.enrolledCourses$ = this.store.select(selectEnrolledCourses);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
  }
}
