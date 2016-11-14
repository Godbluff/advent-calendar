import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent }  from './app.component';
import { DoorComponent } from "./door/door.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { EditorComponent } from "./editor/editor.component";
import {FrontComponent} from "./home/front.component";



@NgModule({
  imports: [ BrowserModule, HttpModule, RouterModule.forRoot([
    { path: 'calendar', component: CalendarComponent },
    { path: 'editor', component: EditorComponent },
    { path: 'home', component: FrontComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}

  ]) ],
  declarations: [ AppComponent, DoorComponent, CalendarComponent, EditorComponent, FrontComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
