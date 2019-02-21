import { AnswersModule } from './../aswers/answer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AngularMaterialModule } from '../angular-material.module';
import { AuthService } from './auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { PostsModule } from '../posts/post.module';
import { NotificationsModule } from '../notifications/notification.module';
@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    AuthRoutingModule,
    PostsModule,
    AnswersModule,
    NotificationsModule,
  ],

  providers: [
    AuthService,
  ]
})
export class AuthModule {}
