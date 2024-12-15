import { bootstrapApplication } from '@angular/platform-browser';
import { HomeConfig } from './home/home.config';
import { HomeComponent } from './home/home.component';

bootstrapApplication(HomeComponent, HomeConfig)
  .catch((err) => console.error(err));
