import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { navigationRoutes } from '../../shared/localdata/navigationRoutes';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationRoute } from '../../shared/models/navigationRoutesModels';

@Component({
  selector: 'app-topmenu',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './topmenu.component.html',
  styleUrl: './topmenu.component.scss'
})
export class TopmenuComponent {
  @Output() setLeftmenuActive = new EventEmitter<boolean>();

  leftMenuActiveStatus = false;
  routeSubscription: Subscription;
  currentRoute?: string;
  navigationRoutes: NavigationRoute[] = navigationRoutes;
  currentSubRoutes: NavigationRoute[] = [];


  clickLeftmenuActive() {
    this.leftMenuActiveStatus = !this.leftMenuActiveStatus;
    this.setLeftmenuActive.emit(this.leftMenuActiveStatus);
  }

  constructor(private router: Router){
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
        this.currentSubRoutes = this.navigationRoutes.filter(mainRoute =>
          {
            return '/' + mainRoute.route === this.currentRoute

          }
        );


        console.log("this.currentSubRoutes", this.currentSubRoutes);
        console.log("this.navigationRoutes", this.navigationRoutes);
      }
    });
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}

export type subView = {
  title: string,
  route: string,
  leftnav: string
}
