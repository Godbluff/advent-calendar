import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {DoorComponent} from "./door/door.component";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, DoorComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
