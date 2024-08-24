import { Component } from '@angular/core';
import { membersCodex } from '../../../../shared/localdata/membersCodex';

@Component({
  selector: 'app-handbook',
  standalone: true,
  imports: [],
  templateUrl: './handbook.component.html',
  styleUrl: './handbook.component.scss',
})
export class HandbookComponent {
  handbookData = membersCodex;
}
