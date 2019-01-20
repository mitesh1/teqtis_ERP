import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPGridComponent } from './erp-grid.component';

describe('ERPGridComponent', () => {
  let component: ERPGridComponent;
  let fixture: ComponentFixture<ERPGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ERPGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ERPGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
