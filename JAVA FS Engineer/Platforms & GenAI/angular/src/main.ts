import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Application entry point.
// Bootstraps the standalone root component (AppComponent) directly,
// instead of bootstrapping an AppModule - the modern Angular 17+/20 approach.
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
