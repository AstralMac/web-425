import { Routes } from '@angular/router';
import { ServicesComponent }from './services/services.component';
import { ViewServicesComponent } from './view-services/view-services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent }from './contact/contact.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'service/:id',
    component: ViewServicesComponent
  }
];
