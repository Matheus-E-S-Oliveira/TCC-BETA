import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDougnutCaixaXLivrosComponent } from './grafico-dougnut-caixa-xlivros.component';

describe('GraficoDougnutCaixaXLivrosComponent', () => {
  let component: GraficoDougnutCaixaXLivrosComponent;
  let fixture: ComponentFixture<GraficoDougnutCaixaXLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoDougnutCaixaXLivrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoDougnutCaixaXLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
