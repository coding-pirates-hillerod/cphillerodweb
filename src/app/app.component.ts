import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { LeftmenuComponent } from './components/leftmenu/leftmenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopmenuComponent, LeftmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cpweb';
}
