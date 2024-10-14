import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout-menu.component.html',
  styleUrl: './layout-menu.component.scss'
})
export class LayoutMenuComponent {
  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;  // Alterna a visibilidade
  }
  getIcon() {
    return this.isVisible ? 'assets/icons/close.svg' : 'assets/icons/menu.svg';
  }
}
