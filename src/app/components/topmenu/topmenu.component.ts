import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { navigationRoutes } from '../../shared/localdata/navigationRoutes';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationRoute } from '../../shared/models/navigationRoutesModels';

@Component({
  selector: 'app-topmenu',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'], // Corrected from 'styleUrl' to 'styleUrls'
})
export class TopmenuComponent implements OnDestroy {
  @Output() setLeftmenuActive = new EventEmitter<boolean>();

  leftMenuActiveStatus = true;
  routeSubscription: Subscription;
  currentRoute?: string;
  navigationRoutes: NavigationRoute[] = navigationRoutes;
  currentSubRoutes: NavigationRoute[] = [];

  constructor(private router: Router) {
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
        // Use `startsWith` to match the base route path
        const firstPart = this.getFirstPartOfRoute(this.currentRoute);
        this.currentSubRoutes = this.navigationRoutes.filter((mainRoute) => {
          return mainRoute.route === firstPart;
        });

        console.log('this.currentSubRoutes', this.currentSubRoutes);
        console.log('this.navigationRoutes', this.navigationRoutes);
      }
    });
  }

  clickLeftmenuActive() {
    this.leftMenuActiveStatus = !this.leftMenuActiveStatus;
    this.setLeftmenuActive.emit(this.leftMenuActiveStatus);
  }

  getFirstPartOfRoute(route: string): string {
    // Remove the leading slash if it exists
    if (route.startsWith('/')) {
      route = route.substring(1);
    }

    // Split the route by slashes and return the first part
    const parts = route.split('/');

    // Return the first part or an empty string if no valid parts exist
    return parts.length > 0 ? parts[0] : '';
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
