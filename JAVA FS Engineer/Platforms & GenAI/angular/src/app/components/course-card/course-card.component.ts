import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { Course } from '../../models/course.model';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnChanges {
  @Input() course: Course | undefined;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;
  isEnrolled$: Observable<boolean>;

  constructor(private store: Store) {
    this.isEnrolled$ = this.store
      .select(selectEnrolledIds)
      .pipe(map((ids) => !!this.course && ids.includes(this.course.id)));
  }

  // ngOnChanges fires whenever an @Input value changes (including on first
  // render right after ngOnInit-equivalent setup) - useful for reacting to
  // parent-driven data changes.
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log(
        'CourseCardComponent course changed:',
        changes['course'].previousValue,
        '->',
        changes['course'].currentValue
      );
    }
  }

  get cardClasses() {
    return {
      'card--enrolled': false,
      'card--full': !!this.course && this.course.credits >= 4,
      expanded: this.isExpanded,
    };
  }

  get borderColor(): string {
    if (!this.course) return '#ccc';
    switch (this.course.gradeStatus) {
      case 'passed':
        return 'green';
      case 'failed':
        return 'red';
      default:
        return 'grey';
    }
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  onEnrollClick(): void {
    if (!this.course) return;
    this.enrollRequested.emit(this.course.id);
    this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
  }

  onUnenrollClick(): void {
    if (!this.course) return;
    this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
  }
}
