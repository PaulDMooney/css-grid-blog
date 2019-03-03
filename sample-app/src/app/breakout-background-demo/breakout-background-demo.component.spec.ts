import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakoutBackgroundDemoComponent } from './breakout-background-demo.component';

describe('BreakoutBackgroundDemoComponent', () => {
  let component: BreakoutBackgroundDemoComponent;
  let fixture: ComponentFixture<BreakoutBackgroundDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakoutBackgroundDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakoutBackgroundDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
