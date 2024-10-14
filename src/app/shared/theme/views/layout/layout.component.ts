import { Component } from '@angular/core';
import { LayoutMenuComponent } from '../layout-menu/layout-menu.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [LayoutMenuComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
