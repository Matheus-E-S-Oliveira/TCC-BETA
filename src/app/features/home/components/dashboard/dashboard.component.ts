import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ChartModule } from 'primeng/chart';
import { NgChartsModule } from 'ng2-charts';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgChartsModule,  // Certifique-se de que NgChartsModule está aqui
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    CanvasJSAngularChartsModule,
    ChartModule,
    MatIconModule
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
  data2: any;
  options2: any;
  data3: any;
  options3: any;

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
  isVisible = false;
  isVisible2 = false;
  isVisible3 = false;

  toggleVisibility(graphNumber: number) {
    if (graphNumber === 1) {
      this.isVisible = !this.isVisible;
    } else if (graphNumber === 2) {
      this.isVisible2 = !this.isVisible2;
    } else if (graphNumber === 3) {
      this.isVisible3 = !this.isVisible3;
    }
  }

  ngOnInit() {
    this.updateChartOptions();
    this.updateChartRcI();
    this.updateChartRcA();
    this.updateChartRcF();
    this.updateChartData();

  }
  updateChartRcI() {
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
          backgroundColor: ['rgba(0, 255, 0, 0.1)'],
          borderColor: ['rgba(0, 255, 0, 0.1)'],
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
  updateChartRcA() {
    const value = [31257, 2612, 0];
    this.data2 = {
      labels: ['Média de itens nas caixas', 'Media de itens nos livros', 'Total de digitalizados'],
      datasets: [
        {
          data: value,
          label: 'Itens Digitalizados',
          backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(169, 169, 169, 0.5)', 'rgba(0, 255, 0, 0.1)'],
          hoverBackgroundColor: ['rgba(255, 0, 0, 0.7)', 'rgba(169, 169, 169, 0.7)', 'rgba(0, 255, 0, 0.1)'],
          borderWidth: [0]
        },
        {
          data: [0, 0, 31257 + 2612],
          label: 'Total de itens digitalizados',
          backgroundColor: ['rgba(0, 255, 0, 0.1)'],
          borderColor: ['rgba(0, 255, 0, 0.1)'],
          borderWidth: [0]
        }
      ]
    };


    this.options2 = {
      cutout: '50%',
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Total de itens digitalizados',
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
  updateChartRcF() {
    const value = [389712, 26125, 0];
    this.data3 = {
      labels: ['Arquivos Digitalizadas', 'Páginas Digitalizados', 'Total digitalizados'],
      datasets: [
        {
          data: value,
          label: 'Itens Digitalizados',
          backgroundColor: ['rgba(128, 0, 128, 0.5)', 'rgba(255, 165, 0, 0.5)', 'rgba(0, 255, 0, 0.2)'],
          hoverBackgroundColor: ['rgba(128, 0, 128, 0.7)', 'rgba(255, 165, 0, 0.7)', 'rgba(0, 255, 0, 0.2)'],
          borderWidth: [0]
        },
        {
          data: [0, 0, 389712 + 26125],
          label: 'Total de itens digitalizados',
          backgroundColor: ['rgba(0, 255, 0, 0.1)'],
          borderColor: ['rgba(0, 255, 0, 0.1)'],
          borderWidth: [0]
        }
      ]
    };


    this.options3 = {
      cutout: '50%',
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Total de Arquivos e Páginas digitalizados',
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
          text: 'Média de arquivos digitalizados por Caixa/Livro',
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
  applyZoom(element: HTMLElement) {

    const currentWidth = element.style.width ? parseFloat(element.style.width.replace('%', '')) : 33.3333; 

    const newWidth = currentWidth === 33.3333 ? 60.3333 : 33.3333;


         
    element.style.transition = 'width 1s ease-in-out 0.1s';
    element.style.width = `${newWidth}%`;
  }
  
}