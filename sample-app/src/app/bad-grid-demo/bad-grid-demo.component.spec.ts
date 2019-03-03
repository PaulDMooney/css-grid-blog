import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadGridDemoComponent } from './bad-grid-demo.component';

describe('BadGridDemoComponent', () => {
  let component: BadGridDemoComponent;
  let fixture: ComponentFixture<BadGridDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadGridDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadGridDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
