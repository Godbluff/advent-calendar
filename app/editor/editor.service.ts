import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class EditorService {
    participants: any = [
        { id: 1234, name: "Harry"},
        { id: 1234, name: "Anine"},
        { id: 1234, name: "Peretoia"},
        { id: 1234, name: "Vamsen"},
        { id: 1234, name: "Lotomar"},
    ];
    calendar: any = [];

    doors: any =  [
        {
            number: 1,
        },
        {
            number: 2,
        },
        {
            number: 3,
        },
        {
            number: 4,
        },
        {
            number: 5,
        },
        {
            number: 6,
        },
        {
            number: 7,
        },
        {
            number: 8,
        },
        {
            number: 9,
        },
        {
            number: 10,
        },
        {
            number: 11,
        },
        {
            number: 12,
        },
        {
            number: 13,
        },
        {
            number: 14,
        },
        {
            number: 15,
        },
        {
            number: 16,
        },
        {
            number: 17,
        },
        {
            number: 18,
        },
        {
            number: 19,
        },
        {
            number: 20,
        },
        {
            number: 21,
        },
        {
            number: 22,
        },
        {
            number: 23,
        },
        {
            number: 24,
        },
    ];

    private headers = new Headers({'Content-Type': 'application/json'});
    private _calendarUrl = 'api/calendardata/calendardata.json';

    constructor(private _http: Http){}

    getCalendar(): Promise<void>{
        console.log('Doing GET calendar');
        return this._http.get(this._calendarUrl)
            .toPromise()
            .then(response => response.json().data).catch(error => console.log(error));
    }
}