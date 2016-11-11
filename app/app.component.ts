import { Component, OnInit } from '@angular/core';
import { CalendarService } from "./services/calendar.service";
import { ICalendar } from './calendar';


@Component({

    selector: 'pm-app',
    template: `
        <div class="christmasbg">
            <div style="padding-top: 10px; width: 100%; height: 50px; line-height: 50px; text-align: center; font-size: 40px; text-shadow: 0px 0px 4px black;">Angular Calendar Coming Soon...</div>
            <div>{{errorMessage}}</div>
            <cc-door *ngFor="let door of calendar[0].doorSequence; let i = index;" [doorNumber]="door" [doorQuote]="calendar[0].doorContent[door-1].quote" [containerId]="'number-' + door"></cc-door>
        </div>
    `,
    providers: [ CalendarService ]
})


export class AppComponent {
    calendar: any = [{
        "doorSequence": [
            1,
            5,
            3,
            17,
            23,
            8,
            9,
            13,
            21,
            4,
            19,
            22,
            2,
            11,
            15,
            18,
            6,
            12,
            7,
            10,
            14,
            16,
            20,
            24
        ],
        "doorContent": [
            {
                "doorNumber": 1,
                "quote": "hello!"
            },
            {
                "doorNumber": 2,
                "quote": "I am here."
            },
            {
                "doorNumber": 3,
                "quote": "Merry Xmas"
            },
            {
                "doorNumber": 4,
                "quote": "Santa is Waiting"
            },
            {
                "doorNumber": 5,
                "quote": "Krampus! Oh No!"
            },
            {
                "doorNumber": 6,
                "quote": "Keep Baking."
            },
            {
                "doorNumber": 7,
                "quote": "Presents all done?"
            },
            {
                "doorNumber": 8,
                "quote": "Looking Good."
            },
            {
                "doorNumber": 9,
                "quote": "Keep the Children happy."
            },
            {
                "doorNumber": 10,
                "quote": "Lost Cause."
            },
            {
                "doorNumber": 11,
                "quote": "This is not the day."
            },
            {
                "doorNumber": 12,
                "quote": "Roger."
            },
            {
                "doorNumber": 13,
                "quote": "Checklist time."
            },
            {
                "doorNumber": 14,
                "quote": "The Insanity begins"
            },
            {
                "doorNumber": 15,
                "quote": "You awake?"
            },
            {
                "doorNumber": 16,
                "quote": "No phone for you."
            },
            {
                "doorNumber": 17,
                "quote": "Keep baking."
            },
            {
                "doorNumber": 18,
                "quote": "Turkey time."
            },
            {
                "doorNumber": 19,
                "quote": "Stickmeat!"
            },
            {
                "doorNumber": 20,
                "quote": "Sausage!"
            },
            {
                "doorNumber": 21,
                "quote": "Last minute Prep."
            },
            {
                "doorNumber": 22,
                "quote": "Almost there."
            },
            {
                "doorNumber": 23,
                "quote": "Do not Panic"
            },
            {
                "doorNumber": 24,
                "quote": "Merry Christmas!"
            }
        ]
    }]
        ;
    errorMessage: string = '';
    constructor(private _calendarService: CalendarService) {

    }

    ngOnInit(): void {
//        this._calendarService.getCalendar()
//            .subscribe(calendar => this.calendar = calendar,
//                        error => this.errorMessage = <any>error,
//                        () => console.log(this.calendar));
//    }

}
