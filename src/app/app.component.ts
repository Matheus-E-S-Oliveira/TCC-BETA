import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './features/home/components/dashboard/dashboard.component';
import { MenubarModule } from 'primeng/menubar';
import { LayoutComponent } from './shared/theme/views/layout/layout.component';
import { LayoutMenuComponent } from './shared/theme/views/layout-menu/layout-menu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterModule, RouterOutlet, DashboardComponent, MenubarModule,LayoutComponent, LayoutMenuComponent ]
})
export class AppComponent {
  title = 'TCC-BETA';
}
