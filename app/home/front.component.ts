import { Component, OnInit } from '@angular/core';
import { CalendarService } from "../services/calendar.service";
import { LanguageService } from "../services/languages.service";

@Component({
    moduleId: module.id,
    templateUrl: 'front.component.html',
    styleUrls: ['front.component.css']
})
export class FrontComponent {
    public pageTitle: string = 'Welcome';

    companyName: string = '';
    participantName: string = '';

    constructor(public calendarService: CalendarService, public languageService: LanguageService ){}

    ngOnInit(){
        console.log(this.languageService.texts.no);
    }

    switchLanguage(lang){
        this.languageService.setLanguage = lang;
    }
}
