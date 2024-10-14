import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { DashboardComponent } from './features/home/components/dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { PrimeNGConfig } from 'primeng/api';
import { RatingModule } from 'primeng/rating';
import { NgChartsModule } from 'ng2-charts'; 
import { LayoutModule } from './shared/theme/module/layout.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppModule,
    HomeModule,
    MatButtonModule,
    MatCardModule,
    TabMenuModule,
    RatingModule,
    PrimeNGConfig,
    NgChartsModule,
    LayoutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
