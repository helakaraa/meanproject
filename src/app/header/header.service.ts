import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Menu } from './header.model';

@Injectable({ providedIn: 'root' })
export class MenuService {

  private menus: Menu[] = [];

  constructor(private http: HttpClient, private router: Router) {}
  private menusUpdated = new Subject<{menus: Menu[]}>();
  getMenu() {
    this.http
      .get<{ message: string; menus: any }>(
        'http://localhost:3000/api/menu'
      )
      .pipe(map((menuData) => {
        return {
          menus: menuData.menus.map(menu => {
            return {
              name: menu.name,
              icon: menu.icon,
              id:   menu._id,
              url:  menu.url
            };
          })
        };
      }))
      .subscribe(transformedPostData => {
        this.menus = transformedPostData.menus;
        this.menusUpdated.next({
          menus: [...this.menus]
        });
      });

  }

  getMenuUpdateListener() {
    return this.menusUpdated.asObservable();
  }

  }

