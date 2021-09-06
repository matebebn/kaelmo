import { Route } from '@angular/router';

import { HomeComponent } from './home.component';
import { UserManagementComponent } from './list/user-management.component';

export const HOME_ROUTE: Routes = [
  {
  path: '',
  component: HomeComponent,
  data: {
    pageTitle: 'home.title',
  },
  },
  {
  path: 'user-panel',
  component: UserManagementComponent,
  data: {
    pageTitle: 'home.title.list',
  },
  },
];
