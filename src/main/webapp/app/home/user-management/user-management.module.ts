import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { UserManagementComponent } from './list/user-management.component';
import { UserManagementDetailComponent } from './detail/user-management-detail.component';
import { userManagementRoute } from './user-management.route';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(userManagementRoute)],
  declarations: [
    UserManagementComponent,
    UserManagementDetailComponent,
  ],

})
export class UserManagementModule {}
