import { Component, OnInit } from '@angular/core';
import { EditorService } from './editor.service';
import {LanguageService} from "../services/languages.service";
import {CalendarService} from "../services/calendar.service";

@Component({
    moduleId: module.id,
    templateUrl: 'editor.front.component.html',
    styleUrls: ['editor.front.component.css']
})
export class EditorFrontComponent implements OnInit {
    public pageTitle: string = 'Create New Calendar';

    companyName: string = '';
    adminPassword : string = '';

    companyName2: string = '';
    adminPassword2 : string = '';

    constructor(public editorService: EditorService,public calendarService: CalendarService, public languageService: LanguageService){

    }
    ngOnInit(){
        let retrievedLang = localStorage.getItem('CCLang');
        let parsedLang = JSON.parse(retrievedLang);
        this.languageService.setLanguage = parsedLang.language;
    }

}
