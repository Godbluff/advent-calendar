import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { DoorComponent } from "./door/door.component";


@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, DoorComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
