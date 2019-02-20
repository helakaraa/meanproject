import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotificationListComponent } from './notifications/notfication-list.component';
import { AnswerListComponent } from './aswers/answer-list.component';
import { AuthGuard } from './auth/auth.gard';
const routes: Routes = [
{ path: '', component: PostListComponent},
{ path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
{ path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent},
{ path: 'signup', component: SignupComponent},
{ path: 'notifications', component: NotificationListComponent},
{ path: 'answers', component: AnswerListComponent},
];



@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule {}
