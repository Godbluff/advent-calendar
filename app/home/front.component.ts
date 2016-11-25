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
        if (localStorage.getItem('CCLang') != null) {
            let retrievedLang = localStorage.getItem('CCLang');
            let parsedLang = JSON.parse(retrievedLang);
            this.languageService.setLanguage = parsedLang.language;
        }
        localStorage.setItem('CCLang', JSON.stringify({ language: this.languageService.setLanguage}));
    }

    switchLanguage(lang: string){
        this.languageService.setLanguage = lang;
        localStorage.setItem('CCLang', JSON.stringify({ language: this.languageService.setLanguage}));
        console.log('Setting Language');
    }
}
