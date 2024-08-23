import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-topmenu',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './topmenu.component.html',
  styleUrl: './topmenu.component.scss'
})
export class TopmenuComponent {

  leftMenuActiveStatus = false;
  @Output() setLeftmenuActive = new EventEmitter<boolean>();

  clickLeftmenuActive() {
    this.leftMenuActiveStatus = !this.leftMenuActiveStatus;
    this.setLeftmenuActive.emit(this.leftMenuActiveStatus);
  }
}

export type subView = {
  title: string,
  route: string,
  leftnav: string
}
