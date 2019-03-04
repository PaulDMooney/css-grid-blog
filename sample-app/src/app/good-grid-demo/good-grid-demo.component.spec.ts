import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodGridDemoComponent } from './good-grid-demo.component';

describe('GoodGridDemoComponent', () => {
  let component: GoodGridDemoComponent;
  let fixture: ComponentFixture<GoodGridDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodGridDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodGridDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
