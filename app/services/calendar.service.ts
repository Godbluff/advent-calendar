import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { ICalendar } from "../calendar";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class CalendarService {
    private _calendarUrl = 'api/calendardata/calendardata.json';

    constructor(private _http: Http) {
    }

    getCalendar(): Observable<ICalendar>{

        return this._http.get(this._calendarUrl)
            .map((response: Response) => <ICalendar[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}