import { Route } from '@angular/router';

import { HomeComponent } from './home.component';
import { UserManagementComponent } from './list/user-management.component';

export const HOME_ROUTE: Route = [
  {
  path: '',
  component: HomeComponent,
  data: {
    pageTitle: 'home.title',
  },
  },
  {
];
