"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const http_1 = require("@angular/http");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const ng2_popover_1 = require("ng2-popover");
const ng_lightning_1 = require("ng-lightning/ng-lightning");
const app_component_1 = require('./app.component');
const door_component_1 = require("./door/door.component");
const calendar_component_1 = require("./calendar/calendar.component");
const editor_component_1 = require("./editor/editor.component");
const front_component_1 = require("./home/front.component");
const editor_door_component_1 = require("./editor/doors/editor.door.component");
const editor_front_component_1 = require("./editor/editor.front.component");
const calendar_modal_1 = require("./shared/calendar.modal");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, ng_lightning_1.NglModule.forRoot(), ng2_popover_1.PopoverModule, router_1.RouterModule.forRoot([
                { path: 'calendar', component: calendar_component_1.CalendarComponent },
                { path: 'editor-front', component: editor_front_component_1.EditorFrontComponent },
                { path: 'editor', component: editor_component_1.EditorComponent },
                { path: 'home', component: front_component_1.FrontComponent },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '**', redirectTo: 'home', pathMatch: 'full' }
            ])],
        declarations: [app_component_1.AppComponent, door_component_1.DoorComponent, calendar_component_1.CalendarComponent, editor_component_1.EditorComponent, front_component_1.FrontComponent, editor_door_component_1.EditorDoorComponent, editor_front_component_1.EditorFrontComponent, calendar_modal_1.CalendarModal],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map