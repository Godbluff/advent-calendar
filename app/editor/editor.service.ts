import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class EditorService {
    calendarUrl: string = 'http://juleluka-api.herokuapp.com/edit/calendar';
    calendar: any = {};

   participants: any = [
        { id: 1234, name: "Harry"},
        { id: 1234, name: "Anine"},
        { id: 1234, name: "Peretoia"},
        { id: 1234, name: "Vamsen"},
        { id: 1234, name: "Lotomar"},
    ];

    doorSequence: any = [
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
];
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
        }
    ];

    private headers = new Headers({'Content-Type': 'application/json'});
    private _calendarUrl = 'api/calendardata/calendardata.json';

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
                console.log(this.calendar);
                this.calendar.password = adminPassword;})
            .then(() => {this.calendar.id.length === 24 ? this._router.navigate(['/editor']) : console.log('Failed routing...')})
            .catch(error => console.log(error));

    }

    editCalendar(companyName: string, password: string){
        let body: string =  this.calendarUrl + '/auth?companyName=' + companyName + '&password=' + password;
        this.http.post(body)
            .toPromise()
            .then((Response: any) => { 
                this.calendar.authToken = Response.json().authToken;
                this.getEditableCalendar(this.calendar.authToken);
                localStorage.setItem('CCUser', JSON.stringify({ token: this.calendar.authToken }));
            })
            .catch((error: any) => console.log(error));

        }

    getEditableCalendar(token : string){
        let headers = new Headers({'Content-type': 'application/json', 'Accept': 'application/json', 'Authorization': token});
        this.http.get(this.calendarUrl, {headers: headers})
            .toPromise()
            .then((Response: any) => {
                console.log(Response.json());
                this.calendar = Response.json();
            })
            .then(() => {this.calendar.id.length === 24 ? this._router.navigate(['/editor']) : console.log('Failed routing...')})
            .catch((error: any) => console.log(error));
    }

    updateDoor(door: any){
        let header: any = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': this.calendar.authToken});
        let body: any = this.calendar.doors[door];
        this.http.put(this.calendarUrl, header, body)
            .toPromise()
            .then((Response: any) => {console.log(Response.json())})
            .catch((error: any) => console.log(error));
    }

    insertParticipant(participantName: string, token: string){
        console.log(this.calendar.authToken);
        let body = {"name": participantName};
        let targetUrl = this.calendarUrl + '/participants';
        let headers = new Headers({'Content-type': 'application/json', 'Accept': 'application/json', 'Authorization': token});
        console.log(participantName, targetUrl, headers);
        this.http.post(targetUrl,body, headers)
            .toPromise()
            .then((Response: any) => {console.log(Response.json())})
            .catch((error: any) => console.log(error));
    }

    deleteParticipant(participantName: string){
        let body = {"name": participantName};
        let headers = new Headers({'Content-type': 'application/json', 'Accept': 'application/json', 'Authorization': this.calendar.authToken});
        this.http.post(this.calendarUrl, body, headers)
    }


}