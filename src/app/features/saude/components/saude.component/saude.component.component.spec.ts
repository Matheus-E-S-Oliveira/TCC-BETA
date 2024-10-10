import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudeComponentComponent } from './saude.component.component';

describe('SaudeComponentComponent', () => {
  let component: SaudeComponentComponent;
  let fixture: ComponentFixture<SaudeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaudeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaudeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
