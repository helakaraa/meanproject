import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { PostListComponent } from '../posts/post-list/post-list.component';
import { PostCreateComponent } from '../posts/post-create/post-create.component';
import { AuthGuard } from './auth-gard.service';
import { SignupComponent } from './signup/signup.component';
import { NotificationListComponent } from '../notifications/notfication-list.component';
import { AnswerListComponent } from '../aswers/answer-list.component';

const routes: Routes = [{
  path: 'auth',
  children: [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'notifications', component: NotificationListComponent},
  { path: 'answers', component: AnswerListComponent},
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
