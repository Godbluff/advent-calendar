import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { PopoverModule } from "ng2-popover";

import { AppComponent }  from './app.component';
import { DoorComponent } from "./door/door.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { EditorComponent } from "./editor/editor.component";
import { FrontComponent } from "./home/front.component";
import { EditorDoorComponent } from "./editor/doors/editor.door.component";
import { EditorFrontComponent } from "./editor/editor.front.component";



@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule, PopoverModule, RouterModule.forRoot([
    { path: 'calendar', component: CalendarComponent },
    { path: 'editor-front', component: EditorFrontComponent },
    { path: 'editor', component: EditorComponent },
    { path: 'home', component: FrontComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}

  ]) ],

  declarations: [ AppComponent, DoorComponent, CalendarComponent, EditorComponent, FrontComponent, EditorDoorComponent, EditorFrontComponent ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
