import { CommonModule } from '@angular/common';
import { Component, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs'

import { MenuItem } from 'primeng/api';
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
    MatTabsModule
    // Outros módulos
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  items: MenuItem[] | undefined;
  value = 4.3;
  totalVotes = 1000;
  isBrowser: boolean = false;
  activeItem!: null;
  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;  // Alterna a visibilidade
  }
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ratings = [
    { category: 'Qualidade', average: 4.2 },
    { category: 'Atendimento', average: 3.8 },
    { category: 'Preço', average: 4.5 },
    { category: 'Facilidade de uso', average: 4.0 },
    { category: 'Entrega', average: 4.7 }
  ];

  generalAverage: number = this.calculateGeneralAverage();

  // Calcular o comprimento da circunferência do círculo
  circumference: number = 2 * Math.PI * 45; // Raio 45px
  // Calcular o desvio da circunferência com base na média
  offset: number = this.circumference - (this.value / 5) * this.circumference;
  screenWidth!: number;
  screenHeight!: number;

  calculateGeneralAverage(): number {
    const total = this.ratings.reduce((acc, rating) => acc + rating.average, 0);
    return total / this.ratings.length;
  }
  data: any;

  options: any;

  ngOnInit() {

    this.updateChartOptions();

    this.initChart();
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => this.activeItem = null,
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ]
  }

  initChart() {
    this.data = {
      labels: ['Media da avaliação dos serviços prestados'],
      datasets: [
        {
          type: 'line',
          label: 'Media Geral',
          borderColor: "rgba(255, 0, 0, 0.8)",
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: [2.0, 3.8, 5.0, 2.0, 3.1]

        },
        {
          type: 'bar',
          label: 'Facilidade de uso',
          backgroundColor: "rgba(138, 43, 226, 0.5)",
          data: [4.0, 1.9, 5.0, 2.1]
        },
        {
          type: 'bar',
          label: 'Atendimento',
          backgroundColor: "rgba(0, 255, 0, 0.5)",
          data: [3.8, 2.9, 5.0, 1.5]
        },
        {
          type: 'bar',
          label: 'Preço',
          backgroundColor: "rgba(255, 165, 0, 0.5)",
          data: [4.5, 3.5, 5.0, 2.0]
        },
        {
          type: 'bar',
          label: 'Qualidade',
          backgroundColor: "rgba(0, 0, 255, 0.5)",
          data: [4.2, 3.9, 5.0, 1.0],
        },
        {
          type: 'bar',
          label: 'Entrega',
          backgroundColor: "rgba(255, 192, 203, 0.5)",
          data: [4.7, 4.9, 5.0, 3.0]
        }
      ]
    };
  }

  updateChartOptions() {
    if (this.screenWidth <= 730) {
      this.initChartOptionsSmallScreen();  // Para telas pequenas
    } else {
      this.initChartOptionsLargeScreen();  // Para telas grandes
    }
  }

  initChartOptionsSmallScreen() {
    this.options = {
      maintainAspectRatio: false,
      responsive: true,
      aspectRatio: 1.3,
      plugins: {
        title: {
          display: true,         // Habilitar exibição do título
          text: 'Avaliação media dos serviços prestados',  // Texto do título
          font: {
            size: 14,            // Tamanho da fonte do título
            weight: 'bold',      // Negrito
            family: 'Arial',     // Tipo da fonte
          },
          color: 'rgba(130, 130, 130, 0.9)',        // Cor do título
          padding: {
            top: 5,            // Distância do topo
            bottom: 10,         // Distância da parte inferior
          },
          align: 'center',       // Alinhamento do título (center, left, right)
          position: 'top',       // Posição do título (top, left, right, bottom)
        },
        legend: {
          position: 'bottom',
          align: 'start',
          labels: {
            font: {
              family: 'Arial', 
              size: 12,
              weight: 'bold',
            },
            color: 'rgba(130, 130, 130, 0.9)'
          }
        }
      },
      scales: {
        x: {
          type: 'category',
          labels: ['Janeiro'],// 'Fevereiro', 'Março', 'Abril', 'Maio'],
          ticks: {
            color: "rgba(130, 130, 130, 0.9)",
          },
          grid: {
            color: "rgba(211, 211, 211, 0.5)"
          }
        },
        y: {
          beginAtZero: true,
          max: 5,
          stepSize: 0.5,
          ticks: {
            color: "rgba(130, 130, 130, 0.9)"
          },
          grid: {
            color: "rgba(211, 211, 211, 0.5)"
          }
        },
      }
    };
  }
  initChartOptionsLargeScreen() {
    this.options = {
      maintainAspectRatio: false,
      responsive: true,
      aspectRatio: 1.3,
      plugins: {
        title: {
          display: true,
          text: 'Avaliação media dos serviços prestados', 
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
      },
      scales: {
        x: {
          type: 'category',
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
          ticks: {
            color: "rgba(130, 130, 130, 0.9)",
          },
          grid: {
            color: "rgba(211, 211, 211, 0.5)"
          }
        },
        y: {
          beginAtZero: true,
          max: 5,
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
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.updateChartOptions();
  }
}
