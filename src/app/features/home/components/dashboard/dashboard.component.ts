import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

import { RatingModule } from 'primeng/rating';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ChartModule } from 'primeng/chart';
import { NgChartsModule } from 'ng2-charts';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgChartsModule,  // Certifique-se de que NgChartsModule está aqui
    MatCardModule,
    TabMenuModule,
    RatingModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    CanvasJSAngularChartsModule,
    ChartModule,
    MenubarModule,
    MatTabsModule,
    MatGridListModule
    // Outros módulos
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  currentMonthIndex: number = 0;
  data: any;
  options: any;
  data1: any;
  options1: any;

  avaliacao = [
    {
      mes: 'Digitalização do Documentos',
      categorias: [
        { nome: 'Média de arquivos por caixa', data: 552, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Média de folhas por caixa', data: 1104, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Média de folhas por livro', data: 343, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Média de páginas por livro', data: 687, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]

    },
  ]

  ngOnInit() {
    this.updateChartOptions();
    this.updateChartRc();
    this.updateChartData();

  }
  updateChartRc() {
    const value = [353, 38, 0];
    const digitalizados = [
      { nome: 'Total de caixas digitalizadas', data: 353, backgroundColor: 'rgba(0, 0, 255, 0.5)', hoverBackgroundColor: 'rgba(0, 0, 255, 0.7' },
      { nome: 'Total de Livros digitalizados', data: 38, backgroundColor: 'rgba(255, 255, 0, 0.5)', hoverBackgroundColor: 'rgba(255, 255, 0, 0.7)' },
      { nome: 'Total digitalizados', data: (353 + 38), backgroundColor: 'rgba(0, 255, 0, 0.2)', hoverBackgroundColor: 'rgba(0, 255, 0, 0.2)' }
    ]
    this.data1 = {
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
          backgroundColor: ['rgba(0, 255, 0, 0.2)'],
          borderColor: ['rgba(0, 255, 0, 0.2)'],
          borderWidth: [0]
        }
      ]  
    };


    this.options1 = {
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

  updateChartData() {

    const datasets = [];

    const categorias = this.avaliacao[this.currentMonthIndex]?.categorias;

    for (const categoria of categorias) {
      const dataset = {
        label: categoria.nome,
        data: this.avaliacao.map(mes => {
          return mes.categorias.find(cat => cat.nome === categoria.nome)?.data || 0;
        }),
        backgroundColor: categoria.backgroundColor,

      };
      datasets.push(dataset);
    }
    const currentLabels = this.avaliacao.map(mes => mes.mes);

    this.data = {
      labels: currentLabels,
      datasets: datasets
    };
  }

  updateChartOptions() {
    this.initChartOptionsLargeScreen();
  }


  initChartOptionsLargeScreen() {
    this.options = {
      maintainAspectRatio: false,
      responsive: true,
      aspectRatio: 1.3,
      plugins: {
        title: {
          display: true,
          text: 'Média de arquivos digitalizados',
          font: {
            size: 16,
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
      },
      scales: {
        x: {
          type: 'category',
          ticks: {
            color: "rgba(130, 130, 130, 0.9)",
          },
          grid: {
            color: "rgba(211, 211, 211, 0.5)"
          }
        },
        y: {
          beginAtZero: true,
          stepSize: 0.5,
          ticks: {
            color: "rgba(130, 130, 130, 0.9)"
          },
          grid: {
            color: "rgba(211, 211, 211, 0.5)"
          }
        }
      }
    };
  }
}