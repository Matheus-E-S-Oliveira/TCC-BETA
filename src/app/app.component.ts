import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './features/home/components/dashboard/dashboard.component';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterModule, RouterOutlet, DashboardComponent, MenubarModule]
})
export class AppComponent {
  title = 'TCC-BETA';
}
