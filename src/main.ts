import { bootstrapApplication } from '@angular/platform-browser';
import { HomeConfig } from './homeFold/home/home.config';
import { HomeComponent } from './homeFold/home/home.component';

bootstrapApplication(HomeComponent, HomeConfig)
  .catch((err) => console.error(err));
