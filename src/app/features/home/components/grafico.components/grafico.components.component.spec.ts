import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoComponentsComponent } from './grafico.components.component';

describe('GraficoComponentsComponent', () => {
  let component: GraficoComponentsComponent;
  let fixture: ComponentFixture<GraficoComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
