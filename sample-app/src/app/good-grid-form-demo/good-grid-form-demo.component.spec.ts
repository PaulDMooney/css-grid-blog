import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodGridFormDemoComponent } from './good-grid-form-demo.component';

describe('GoodGridFormDemoComponent', () => {
  let component: GoodGridFormDemoComponent;
  let fixture: ComponentFixture<GoodGridFormDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodGridFormDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodGridFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
