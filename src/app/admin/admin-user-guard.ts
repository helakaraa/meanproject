import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class OnlyAdminUsersGuard implements CanActivate {

  constructor(private authService: AuthService) {}
  canActivate() {
    return this.authService.getUserRole();
  }
}
