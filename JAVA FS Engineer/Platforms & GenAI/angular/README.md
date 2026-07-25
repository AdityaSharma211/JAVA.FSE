# Student Course Portal — Angular (v20.0) Hands-On Solutions

Digital Nurture 5.0 | .NET Full Stack Engineer Track

A single Angular application built incrementally across all 10 hands-on exercises, using
Angular 20's standalone component API (no NgModules).

## Setup

```bash
npm install -g @angular/cli
npm install -g json-server
npm install
```

## Running the app

```bash
# Terminal 1 — mock backend (required for Hands-On 8+)
json-server --watch db.json --port 3000

# Terminal 2 — Angular dev server
ng serve
```
Open http://localhost:4200

## Running tests

```bash
ng test               # Karma + Jasmine, watch mode
ng test --code-coverage
```

## Where each hands-on lives

| Hands-On | Topic | Where to look |
|---|---|---|
| 1 | Setup, structure, first components | `notes.txt`, `src/app/components/header`, `src/app/pages/home` |
| 2 | Data binding, lifecycle hooks, @Input/@Output | `pages/home`, `components/course-card` |
| 3 | Directives & pipes | `directives/highlight.directive.ts`, `pipes/credit-label.pipe.ts`, `components/course-card` |
| 4 | Template-driven forms | `pages/enrollment-form` |
| 5 | Reactive forms, custom/async validators, FormArray | `pages/reactive-enrollment-form` |
| 6 | Services & DI | `services/course.service.ts`, `services/enrollment.service.ts`, `services/notification.service.ts`, `components/course-summary-widget` |
| 7 | Routing, guards, lazy loading | `app.routes.ts`, `guards/`, `features/enrollment`, `pages/courses-layout`, `pages/course-detail` |
| 8 | HttpClient, RxJS, interceptors | `services/course.service.ts`, `interceptors/` |
| 9 | NgRx store, actions, reducers, effects, selectors | `store/course/`, `store/enrollment/` |
| 10 | Unit testing (Jasmine/Karma/TestBed) | `**/*.spec.ts` |

## Notes on architecture decisions

- **Standalone components** are used throughout (Angular 20 default) — each component
  declares its own `imports` array instead of relying on NgModules.
- **CourseCardComponent** enrolls/unenrolls via the NgRx store (Hands-On 9's final state),
  which supersedes the Hands-On 6 service-only approach — `EnrollmentService` is still used
  directly on the Student Profile page and for the simulated "students in a course" HTTP call.
- **CourseService** falls back to local mock data if `json-server` isn't running, so the UI
  stays demoable even without the mock backend up.
- Submit this folder as `Angular_HandsOn/<YourName>/` per the exercise book's submission
  guidelines (already excludes `node_modules` via `.gitignore`).
