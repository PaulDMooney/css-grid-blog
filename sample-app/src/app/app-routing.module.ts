import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakoutBackgroundDemoComponent } from './breakout-background-demo/breakout-background-demo.component';
import { BadGridDemoComponent } from './bad-grid-demo/bad-grid-demo.component';

const routes: Routes = [
  {
    path: 'breakoutbackground',
    component: BreakoutBackgroundDemoComponent
  },
  {
    path: 'badgrid',
    component: BadGridDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
