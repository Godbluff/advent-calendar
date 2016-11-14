import { Component, OnInit } from '@angular/core';
import { CalendarService } from "./services/calendar.service";


@Component({

    selector: 'ca-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    providers: [ CalendarService ]
})


export class AppComponent {
    errorMessage: string = '';
    pageTitle: 'Christmas Calendar';

    constructor() {

    }

    ngOnInit(): void {

    }

}
