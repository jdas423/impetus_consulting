import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent} from './homeFold/home/home.component';
import { config } from './homeFold/home/home.config.server';

const bootstrap = () => bootstrapApplication(HomeComponent, config);

export default bootstrap;
