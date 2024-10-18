import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDoughnutArquivosXPaginasComponent } from './grafico-doughnut-arquivos-xpaginas.component';

describe('GraficoDoughnutArquivosXPaginasComponent', () => {
  let component: GraficoDoughnutArquivosXPaginasComponent;
  let fixture: ComponentFixture<GraficoDoughnutArquivosXPaginasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoDoughnutArquivosXPaginasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoDoughnutArquivosXPaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
