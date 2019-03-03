import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreakoutBackgroundDemoComponent } from './breakout-background-demo/breakout-background-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    BreakoutBackgroundDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
