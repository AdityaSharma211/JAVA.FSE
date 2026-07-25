import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { CourseListComponent } from './course-list.component';
import { Course } from '../../models/course.model';

describe('CourseListComponent (NgRx store-connected)', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Operating Systems', code: 'CS102', credits: 3, gradeStatus: 'pending' },
  ];

  const initialState = {
    course: { courses: mockCourses, loading: false, error: null },
    enrollment: { enrolledCourseIds: [] },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [provideMockStore({ initialState }), provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course cards from the initial store state', () => {
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(cards.length).toBe(2);
  });

  it('should show a loading indicator when the loading slice is true', () => {
    store.setState({
      course: { courses: [], loading: true, error: null },
      enrollment: { enrolledCourseIds: [] },
    });
    fixture.detectChanges();

    const loadingText = fixture.debugElement.nativeElement.textContent;
    expect(loadingText).toContain('Loading courses...');
  });
});
