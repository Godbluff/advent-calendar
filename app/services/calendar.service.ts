import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import { ICalendar } from "../calendar";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {LanguageService} from "./languages.service";

@Injectable()
export class CalendarService {
    calendarUrl: string = 'https://juleluka-api.herokuapp.com/calendar';
    userCalendar: any = {};
    userToken: string = '';
    loaderVisible: string = 'none';
    wantNewCalendar: boolean = true;
    errorMessage: string = '';
    todayNumber: number = 0;

    constructor(private http: Http, private router: Router, public languageService: LanguageService) {
    }

    getCalendar(companyName: string, participantName: string): void {
        this.loaderVisible = 'block';
        let headers = new Headers({'Content-type': 'application/json'});
        let targetUrl: string  = 'https://juleluka-api.herokuapp.com/calendar/participant/lookup?companyName=' + companyName + '&participantName=' + participantName;
        this.http.get(targetUrl, {headers: headers})
            .toPromise()
            .then((Response: any) => {
                this.userToken = Response.json().token;
                localStorage.setItem('CCParticipant', JSON.stringify({ token: this.userToken}));
            })
            .then(()=> this.openCalendar(this.userToken))
            .catch((error: any) => {
                error.status === 400 ? this.errorMessage = this.languageService.texts.errorMessage[this.languageService.setLanguage] : this.errorMessage = '';
                this.loaderVisible = 'none';
            });
    }

    openCalendar(token: string){
        let date = new Date();
        this.todayNumber = date.getDate();
        console.log(this.todayNumber);
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