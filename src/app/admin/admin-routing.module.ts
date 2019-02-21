import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { OnlyAdminUsersGuard } from './admin-user-guard';
import { PostCreateComponent } from '../posts/post-create/post-create.component';
import { AuthGuard } from '../auth/auth-gard.service';

const routes: Routes = [{
  path: 'admin',
  canActivate: [OnlyAdminUsersGuard],
  children: [{
    path: '',
    component: AdminComponent,
  },
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },

]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
