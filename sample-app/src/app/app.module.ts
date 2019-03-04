import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreakoutBackgroundDemoComponent } from './breakout-background-demo/breakout-background-demo.component';
import { BadGridDemoComponent } from './bad-grid-demo/bad-grid-demo.component';
import { GoodGridDemoComponent } from './good-grid-demo/good-grid-demo.component';
import { SidebarTemplateComponent } from './sidebar-template/sidebar-template.component';

@NgModule({
  declarations: [
    AppComponent,
    BreakoutBackgroundDemoComponent,
    BadGridDemoComponent,
    GoodGridDemoComponent,
    SidebarTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
