import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class EditorService {
    private calendarUrl: string = 'https://juleluka-api.herokuapp.com/edit/calendar';
    authToken: '';
    calendar: any = { };


    constructor(private http: Http, private _router: Router){}


    createCalendar(companyName: string, adminPassword: string){
        this.calendar = {};
        let body = {"companyName": companyName, "adminPassword": adminPassword};
        let header = new Headers({'Content-Type': 'application/json' });
        this.http.post(this.calendarUrl, body, header)
            .toPromise()
            .then(Response => {
                Response.json();
                console.log('Got id: ' + Response.json().id);
                this.calendar = Response.json();
                this.calendar.password = adminPassword;})
            .then(() => {this.calendar.id.length === 24 ? this._router.navigate(['/editor']) : console.log('Failed routing...');})
            .catch(error => console.log(error));
    }


    editCalendar(companyName: string, password: string){
        let body: string =  this.calendarUrl + '/auth?companyName=' + companyName + '&password=' + password;
        this.http.post(body, '')
            .toPromise()
            .then((Response: any) => { 
                this.authToken = Response.json().authToken;
                this.getEditableCalendar(this.authToken, 'editCalendar');
                localStorage.setItem('CCUser', JSON.stringify({ token: this.authToken}));
            })
            .catch((error: any) => console.log(error));
        }


    getEditableCalendar(token : string, message: string){
        let headers = new Headers({'Content-type': 'application/json', 'Accept': 'application/json', 'Authorization': token});
        this.http.get(this.calendarUrl, {headers: headers})
            .toPromise()
            .then((Response: any) => {
                console.log('Calendar Loaded.');
                this.calendar = Response.json();
            })
            .then(() => {
                this.calendar.id.length === 24 ? this._router.navigate(['/editor']) : console.log('Failed routing...');})
            .catch((error: any) => console.log(error));
    }


    updateDoor(door: any){
        console.log(door);
        let header: any = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': this.authToken});
        let targetUrl = this.calendarUrl + '/doors/' + (door+1);
        let body: any = this.calendar.doors[door];
        // this.calendar.doors[door].number === (door+1) ? console.log('Numbers match up.') : console.log('Door Number mismatch');
        this.http.put(targetUrl, body, {headers: header})
            .toPromise()
            .then((Response: any) => {console.log(Response.status)})
            .catch((error: any) => console.log(error));
    }


    insertParticipant(participantName: string, token: string){
        let body = {"name": participantName};
        let targetUrl = this.calendarUrl + '/participants';
        let headers = new Headers({'Content-type': 'application/json', 'Accept': 'application/json', 'Authorization': token});
        this.http.post(targetUrl,body, {headers: headers})
            .toPromise()
            .then((Response: any) => {console.log(participantName + ' added.'); this.calendar.participants.push(Response.json());})
            .catch((error: any) => console.log(error));
    }


    deleteParticipant(userId: string, token: string){
        let targetUrl = this.calendarUrl + '/participants/' + userId;
        let headers = new Headers({'Content-type': 'application/json', 'Accept': 'application/json', 'Authorization': token});
        this.http.delete(targetUrl, {headers: headers})
            .toPromise()
            .then((Response: any) => {console.log('Deleted Participant? ' + Response.ok)})
            .catch((error: any) => console.log(error));
    }


    logCalendar(){
        console.log(this.calendar);
    }


    updateFullCalendar(){
        let body = this.calendar;
        let headers = new Headers({'Content-type': 'application/json', 'Accept': 'application/json', 'Authorization': this.authToken});
        this.http.put(this.calendarUrl, body, {headers: headers})
            .toPromise()
            .then((Response: any) => {console.log('Calendar Updated.')})
            .catch((error: any) => console.log(error));
    }


    unlockCalendar(){
        this.calendar.doorsAlwaysAvailable = !this.calendar.doorsAlwaysAvailable;
        console.log('Doors Open? ' + this.calendar.doorsAlwaysAvailable);
    }
}