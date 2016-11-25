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
var core_1 = require('@angular/core');
var calendar_service_1 = require("../services/calendar.service");
var languages_service_1 = require("../services/languages.service");
var FrontComponent = (function () {
    function FrontComponent(calendarService, languageService) {
        this.calendarService = calendarService;
        this.languageService = languageService;
        this.pageTitle = 'Welcome';
        this.companyName = '';
        this.participantName = '';
    }
    FrontComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('CCLang') != null) {
            var retrievedLang = localStorage.getItem('CCLang');
            var parsedLang = JSON.parse(retrievedLang);
            this.languageService.setLanguage = parsedLang.language;
        }
        localStorage.setItem('CCLang', JSON.stringify({ language: this.languageService.setLanguage }));
    };
    FrontComponent.prototype.switchLanguage = function (lang) {
        this.languageService.setLanguage = lang;
        localStorage.setItem('CCLang', JSON.stringify({ language: this.languageService.setLanguage }));
        console.log('Setting Language');
    };
    FrontComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'front.component.html',
            styleUrls: ['front.component.css']
        }), 
        __metadata('design:paramtypes', [calendar_service_1.CalendarService, languages_service_1.LanguageService])
    ], FrontComponent);
    return FrontComponent;
}());
exports.FrontComponent = FrontComponent;
//# sourceMappingURL=front.component.js.map