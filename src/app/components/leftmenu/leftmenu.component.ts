import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TopmenuComponent } from '../topmenu/topmenu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { navigationRoutes } from '../../shared/localdata/navigationRoutes';
import { MainRoute } from '../../shared/models/navigationRoutesModels';

@Component({
  selector: 'app-leftmenu',
  standalone: true,
  imports: [MatSidenavModule, TopmenuComponent, MatIconModule, MatButtonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './leftmenu.component.html',
  styleUrl: './leftmenu.component.scss'
})
export class LeftmenuComponent {
  leftmenuActive = true;
  mainRoutes: MainRoute[] = navigationRoutes;
}
