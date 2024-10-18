import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TabMenuModule} from 'primeng/tabmenu';
import { RatingModule } from 'primeng/rating';
import { AppModule } from '../../app.module';
import { NgChartsModule } from 'ng2-charts';
import { GraficoDougnutCaixaXLivrosComponent } from './components/grafico-doughnut-caixaXlivros/grafico-dougnut-caixa-xlivros.component';



@NgModule({
  declarations: [
    DashboardComponent,
    GraficoDougnutCaixaXLivrosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TabMenuModule,
    RatingModule,
    AppModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    NgChartsModule
    
  ]
})
export class HomeModule { }
