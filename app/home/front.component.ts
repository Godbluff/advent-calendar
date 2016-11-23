import { Component } from '@angular/core';
import { CalendarService } from "../services/calendar.service";

@Component({
    moduleId: module.id,
    templateUrl: 'front.component.html',
    styleUrls: ['front.component.css']
})
export class FrontComponent {
    public pageTitle: string = 'Welcome';

    companyName: string = '';
    participantName: string = '';

    constructor(public calendarService: CalendarService){}
}
