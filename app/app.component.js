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
const calendar_service_1 = require("./services/calendar.service");
const router_1 = require('@angular/router');
require('rxjs/add/operator/filter');
let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.router.events.filter(event => event instanceof router_1.NavigationEnd).subscribe(event => {
            window.scroll(0, 0);
        });
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'ca-app',
        moduleId: module.id,
        templateUrl: 'app.component.html',
        providers: [calendar_service_1.CalendarService]
    }), 
    __metadata('design:paramtypes', [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map