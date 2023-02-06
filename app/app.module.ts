import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { DataSharingService } from './data-service.service';



@NgModule({
  declarations: [
    AppComponent, Component1Component,Component2Component, Component3Component
  ],
  imports:[
    BrowserModule,CommonModule
  ],
  bootstrap: [AppComponent],
  providers: [DataSharingService],  
})
export class AppModule {

}

