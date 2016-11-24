import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ICalendar } from "../calendar";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class CalendarService {
    calendarUrl: string = 'http://juleluka-api.herokuapp.com/calendar';
    userCalendar: any = {};
    userToken: string = '';
    loaderVisible: string = 'none';

    constructor(private http: Http, private router: Router) {
    }

    getCalendar(companyName: string, participantName: string): void {
        this.loaderVisible = 'block';
        let headers = new Headers({'Content-type': 'application/json'});
        let targetUrl: string  = 'http://juleluka-api.herokuapp.com/calendar/participant/lookup?companyName=' + companyName + '&participantName=' + participantName;
        this.http.get(targetUrl, {headers: headers})
            .toPromise()
            .then((Response: any) => {
                this.userToken = Response.json().token;
            })
            .then(()=> this.openCalendar(this.userToken))
            .catch((error: any) => {console.log(error); this.loaderVisible = 'none';});
    }

    openCalendar(token: string){
        let headers: any = new Headers({'Accept': 'application/json', 'X-Participant' : token});
        this.http.get(this.calendarUrl, {headers: headers})
            .toPromise()
            .then((Response: any) => {
                this.userCalendar = Response.json();
            })
            .then(() => {
                this.loaderVisible = 'none';
                this.userCalendar.doorSequence.length === 24 ? this.router.navigate(['/calendar']) : 'Seems the data is not in place.';
                console.log(this.userCalendar);
            })
            .catch((error: any) => {console.log(error); this.loaderVisible = 'none';});
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}