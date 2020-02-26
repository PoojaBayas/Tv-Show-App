import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousSearchComponent } from './previous-search.component';

describe('PreviousSearchComponent', () => {
  let component: PreviousSearchComponent;
  let fixture: ComponentFixture<PreviousSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
