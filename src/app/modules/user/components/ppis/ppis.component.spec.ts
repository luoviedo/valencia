import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpisComponent } from './ppis.component';

describe('PpisComponent', () => {
  let component: PpisComponent;
  let fixture: ComponentFixture<PpisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
