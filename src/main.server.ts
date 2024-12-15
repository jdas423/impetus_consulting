import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent} from './home/home.component';
import { config } from './home/home.config.server';

const bootstrap = () => bootstrapApplication(HomeComponent, config);

export default bootstrap;
