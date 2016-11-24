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
        let retrievedToken = localStorage.getItem('CCParticipant');
        let parsedToken = JSON.parse(retrievedToken);
        this.calendarService.openCalendar(parsedToken.token);
        this.calendarService.userToken = parsedToken.token;
    }

}