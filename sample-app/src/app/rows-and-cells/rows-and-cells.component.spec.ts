import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsAndCellsComponent } from './rows-and-cells.component';

describe('RowsAndCellsComponent', () => {
  let component: RowsAndCellsComponent;
  let fixture: ComponentFixture<RowsAndCellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowsAndCellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowsAndCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
