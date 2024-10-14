import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../views/layout/layout.component';
import { LayoutMenuComponent } from '../views/layout-menu/layout-menu.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    LayoutComponent,
    LayoutMenuComponent,
  ],
  exports: [
    LayoutComponent,
    LayoutMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class LayoutModule { }
