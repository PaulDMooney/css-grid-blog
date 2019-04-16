import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SVGIconsShowcaseComponent } from './svg-icons-showcase.component';

describe('SVGIconsShowcaseComponent', () => {
  let component: SVGIconsShowcaseComponent;
  let fixture: ComponentFixture<SVGIconsShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SVGIconsShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SVGIconsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
