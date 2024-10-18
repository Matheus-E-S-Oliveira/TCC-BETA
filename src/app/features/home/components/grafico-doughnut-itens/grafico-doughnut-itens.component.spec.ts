import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDoughnutItensComponent } from './grafico-doughnut-itens.component';

describe('GraficoDoughnutItensComponent', () => {
  let component: GraficoDoughnutItensComponent;
  let fixture: ComponentFixture<GraficoDoughnutItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoDoughnutItensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoDoughnutItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
