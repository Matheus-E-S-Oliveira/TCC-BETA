import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-grafico-dougnut-caixa-xlivros',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    
  ],
  templateUrl: './grafico-dougnut-caixa-xlivros.component.html',
  styleUrl: './grafico-dougnut-caixa-xlivros.component.scss'
})
export class GraficoDougnutCaixaXLivrosComponent extends DashboardComponent {
  
  override ngOnInit(): void {
    this.updateChartDoughnutCxL(); 
  }

  
  updateChartDoughnutCxL() {
    const value = [353, 38, 0];
    const digitalizados = [
      { nome: 'Total de caixas digitalizadas', data: 353, backgroundColor: 'rgba(0, 0, 255, 0.5)', hoverBackgroundColor: 'rgba(0, 0, 255, 0.7' },
      { nome: 'Total de Livros digitalizados', data: 38, backgroundColor: 'rgba(255, 255, 0, 0.5)', hoverBackgroundColor: 'rgba(255, 255, 0, 0.7)' },
      { nome: 'Total digitalizados', data: (353 + 38), backgroundColor: 'rgba(0, 255, 0, 0.2)', hoverBackgroundColor: 'rgba(0, 255, 0, 0.2)' }
    ]
    this.data = {
      labels: ['Caixas Digitalizadas', 'Livros Digitalizados', 'Total digitalizados'],
      datasets: [
        {
          data: value,
          label: 'Itens Digitalizados',
          backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(0, 255, 0, 0.2)'],
          hoverBackgroundColor: ['rgba(0, 0, 255, 0.7)', 'rgba(255, 255, 0, 0.7)', 'rgba(0, 255, 0, 0.2)'],
          borderWidth: [0]
        },
        {
          data: [0, 0, 353 + 38],
          label: 'Total de itens digitalizados',
          backgroundColor: ['rgba(0, 255, 0, 0.1)'],
          borderColor: ['rgba(0, 255, 0, 0.1)'],
          borderWidth: [0]
        }
      ]
    };


    this.options = {
      cutout: '50%',
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Total de Caixa e Livros Digitalizados',
          font: {
            size: 14,
            weight: 'bold',
            family: 'Arial',
          },
          color: 'rgba(130, 130, 130, 1)',
          padding: {
            top: 5,
            bottom: 10,
          },
          align: 'center',
          position: 'top',
        },
        legend: {
          position: 'bottom',
          align: 'center',
          labels: {
            font: {
              family: 'Arial',
              size: 11,
              weight: 'bold',
            },
            color: 'rgba(130, 130, 130, 0.9)'
          }
        }
      }
    };
  }
}
