import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CourseService } from '../../services/course.service';
import { loadCourses, loadCoursesSuccess, loadCoursesFailure } from './course.actions';

// Effects are the only place in NgRx where side effects (HTTP calls,
// navigation, localStorage) should happen - reducers must stay pure.
@Injectable()
export class CourseEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCourses),
      switchMap(() =>
        this.courseService.getCourses().pipe(
          map((courses) => loadCoursesSuccess({ courses })),
          catchError((error) => of(loadCoursesFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private courseService: CourseService) {}
}
