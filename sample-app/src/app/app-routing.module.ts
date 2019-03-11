import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakoutBackgroundDemoComponent } from './breakout-background-demo/breakout-background-demo.component';
import { BadGridDemoComponent } from './bad-grid-demo/bad-grid-demo.component';
import { GoodGridDemoComponent } from './good-grid-demo/good-grid-demo.component';
import { BadGridFormDemoComponent } from './bad-grid-form-demo/bad-grid-form-demo.component';
import { GoodGridFormDemoComponent } from './good-grid-form-demo/good-grid-form-demo.component';
import { RowsAndCellsComponent } from './rows-and-cells/rows-and-cells.component';
import { SVGIconsShowcaseComponent } from './svg-icons-showcase/svg-icons-showcase.component';

const routes: Routes = [
  {
    path: 'breakoutbackground',
    component: BreakoutBackgroundDemoComponent
  },
  {
    path: 'badgrid',
    component: BadGridDemoComponent
  },
  {
    path: 'goodgrid',
    component: GoodGridDemoComponent
  },
  {
    path: 'badgridform',
    component: BadGridFormDemoComponent
  },
  {
    path: 'goodgridform',
    component: GoodGridFormDemoComponent
  },
  {
    path: 'rowsandcells',
    component: RowsAndCellsComponent
  },
  {
    path: 'icons',
    component: SVGIconsShowcaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
