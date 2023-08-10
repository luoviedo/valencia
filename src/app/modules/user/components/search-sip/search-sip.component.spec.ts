import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSipComponent } from './search-sip.component';

describe('SearchSipComponent', () => {
  let component: SearchSipComponent;
  let fixture: ComponentFixture<SearchSipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
