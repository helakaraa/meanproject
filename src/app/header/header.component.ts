import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Menu } from './header.model';
import { MenuService } from './header.service';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy {
  @Input() user: any = {};
   menu: Menu[] = [];
   userIsAuthenticated = false;
    private authListenerSubs: Subscription;
   constructor(public menuService: MenuService, private authService: AuthService) {}
   private menusSub: Subscription;
   ngOnInit() {

    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
   this.menuService.getMenu();
   this.menusSub = this.menuService.getMenuUpdateListener()
      .subscribe((menuData: {menus: Menu[]}) => {
        this.menu = menuData.menus;
      });
  }
  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.menusSub.unsubscribe();
    this.authListenerSubs.unsubscribe();
  }
}
