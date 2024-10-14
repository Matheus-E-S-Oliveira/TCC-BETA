import { CommonModule } from '@angular/common';
import { Component, HostListener, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
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
import { reverse } from 'node:dns';


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
  value = 1.4;
  value1 = 0.2;
  value2 = 2.5;
  value3 = 1.0;
  value4 = 2.0;
  totalVotes = 1000;
  isBrowser: boolean = false;
  activeItem!: null;
 
  currentMonthIndex: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private cdRef: ChangeDetectorRef) { }

  ratings = [
    { category: 'Saude', average: 0.2 },
    { category: 'Educação', average: 2.5 },
    { category: 'Infraestrutura', average: 1.0 },
    { category: 'Segurança', average: 2.0 },
  ];

  generalAverage: number = this.calculateGeneralAverage();

  circumference: number = 2 * Math.PI * 45;
  offset: number = this.circumference - (this.value / 5) * this.circumference;
  screenWidth!: number;
  data: any;
  options: any;

  calculateGeneralAverage(): number {
    const total = this.ratings.reduce((acc, rating) => acc + rating.average, 0);
    return total / this.ratings.length;
  }

  avaliacao = [
    {
      mes: 'Janeiro',
      categorias: [
        { nome: 'Saude', data: 4.0, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 4.2, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 3.8, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 4.5, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Fevereiro',
      categorias: [
        { nome: 'Saude', data: 3.5, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 4.0, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 4.2, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 3.7, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Março',
      categorias: [
        { nome: 'Saude', data: 4.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 4.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 3.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 4.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Abril',
      categorias: [
        { nome: 'Saude', data: 3.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 2.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 2.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 1.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Maio',
      categorias: [
        { nome: 'Saude', data: 1.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 4.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 0.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 2.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Junho',
      categorias: [
        { nome: 'Saude', data: 4.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 4.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 4.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 4.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Julho',
      categorias: [
        { nome: 'Saude', data: 1.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 1.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 1.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 1.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Agosto',
      categorias: [
        { nome: 'Saude', data: 1.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 1.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 1.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 1.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Setembro',
      categorias: [
        { nome: 'Saude', data: 1.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 1.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 1.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 1.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Outubro',
      categorias: [
        { nome: 'Saude', data: 1.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 1.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 1.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 1.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    }]

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
      this.updateChartOptions();
      this.updateChartData();
      
    }
  }
  updateChartData() {
    
    
    const totalMonths = this.avaliacao.length;
    let startIndex = Math.max(totalMonths - 6 - this.currentMonthIndex, 0);
    const lastSixMonths = this.avaliacao.slice(startIndex, startIndex + 6);

    const labels = this.avaliacao.map(mes => mes.mes);

    const datasets = [];

    const categorias = this.avaliacao[this.currentMonthIndex]?.categorias;

    for (const categoria of categorias) {
      const dataset = {
        label: categoria.nome,
        data: lastSixMonths.map(mes => {

          if (this.screenWidth > 730) {
            return mes.categorias.find(cat => cat.nome === categoria.nome)?.data || 0;
          }
          else {
            this.avaliacao.reverse();
            return this.avaliacao[this.currentMonthIndex]?.categorias.find(cat => cat.nome === categoria.nome)?.data || 0;
          }
        }),
        backgroundColor: categoria.backgroundColor,

      };
      datasets.push(dataset);
    }
    const mediaGeralDataset = {
      label: 'Média Geral',
      data: lastSixMonths.map(mes => {
        if (this.screenWidth > 730) {
          const media = mes.categorias.reduce((acc, categoria) => acc + categoria.data, 0) / mes.categorias.length;
          return media;
        }
        else {
          this.avaliacao.reverse();
          const mesAtual = this.avaliacao[this.currentMonthIndex];
          if (mesAtual && mesAtual.categorias.length > 0) {
            const media = mesAtual.categorias.reduce((acc, categoria) => acc + categoria.data, 0) / mesAtual.categorias.length;
            return media;
          } else {
            return 0;
          }
        }
      }),
      borderColor: "rgba(255, 0, 0, 0.8)",
      borderWidth: 3,
      fill: false,
      tension: 0.4,
      type: 'line',
      pointBackgroundColor: "rgba(150, 150, 150, 0,2)",
      pointBorderColor: "rgba(150, 150, 150, 0.5)",
    };
    datasets.push(mediaGeralDataset);
    const labelSmallScreen = labels;
    const currentLabels = this.screenWidth <= 730 ? [labelSmallScreen.reverse()[this.currentMonthIndex]] : lastSixMonths.map(mes => mes.mes);

    this.data = {
      labels: currentLabels,
      datasets: datasets
    };
    this.updateChartOptions();
    this.cdRef.detectChanges();
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
          display: true,
          text: 'Avaliação media dos serviços prestados',
          font: {
            size: 14,
            weight: 'bold',
            family: 'Arial',
          },
          color: 'rgba(130, 130, 130, 0.9)',
          padding: {
            top: 5,
            bottom: 10,
          },
          align: 'center',
          position: 'top',
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
  nextMonth() {
    const totalMonths = this.avaliacao.length;
    if (this.currentMonthIndex > 0) {
        this.currentMonthIndex--;
        this.updateChartData(); 
    }
}

prevMonth() {
  const totalMonths = this.avaliacao.length; 
  if (this.currentMonthIndex < totalMonths - 1) {
      this.currentMonthIndex++;
      this.updateChartData();
  }
}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.updateChartOptions();
    this.updateChartData();
  }
}
