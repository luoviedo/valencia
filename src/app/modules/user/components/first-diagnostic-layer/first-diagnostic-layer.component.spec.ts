import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDiagnosticLayerComponent } from './first-diagnostic-layer.component';

describe('FirstDiagnosticLayerComponent', () => {
  let component: FirstDiagnosticLayerComponent;
  let fixture: ComponentFixture<FirstDiagnosticLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstDiagnosticLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstDiagnosticLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
