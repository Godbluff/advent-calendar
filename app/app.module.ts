import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent }  from './app.component';
import { DoorComponent } from "./door/door.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { EditorComponent } from "./editor/editor.component";
import { FrontComponent } from "./home/front.component";
import { EditorDoorComponent } from "./editor/doors/editor.door.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule, RouterModule.forRoot([
    { path: 'calendar', component: CalendarComponent },
    { path: 'editor', component: EditorComponent },
    { path: 'home', component: FrontComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}

  ]) ],
  declarations: [ AppComponent, DoorComponent, CalendarComponent, EditorComponent, FrontComponent, EditorDoorComponent ],
bootstrap: [ AppComponent ]
})
export class AppModule { }
