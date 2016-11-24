import { Component, OnInit } from '@angular/core';
import { CalendarService } from "../services/calendar.service";


@Component({

    selector: 'pm-app',
    moduleId: module.id,
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.css']

})


export class CalendarComponent {

    errorMessage: string = '';

    constructor(public calendarService: CalendarService) {

    }

    ngOnInit(): void {

    }

}