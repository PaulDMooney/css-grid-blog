import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadGridFormDemoComponent } from './bad-grid-form-demo.component';

describe('BadGridFormDemoComponent', () => {
  let component: BadGridFormDemoComponent;
  let fixture: ComponentFixture<BadGridFormDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadGridFormDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadGridFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
