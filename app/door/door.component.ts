import { Component, OnInit, Input } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import {CalendarModal} from "../shared/calendar.modal";
import {CalendarService} from "../services/calendar.service";
import './sparkly.js'

declare var $:any;

@Component({

    selector: 'cc-door',
    moduleId: module.id,
    templateUrl: 'door.component.html',
    styleUrls: ['door.component.css'],
    providers: [ CalendarModal ]

})

export class DoorComponent {

    @Input() doorNumber : number;
    @Input() isOpened: boolean = false;
    doorQuote : string;
    @Input() containerId: string;
    prize: string;
    userWin: boolean = false;
    instructions: string = '';
    imageUrl: string = '';
    doorAvailable: boolean = false;

    cardClass: string = 'card';
    doorOpen: boolean = false;
    bgPos: string = '';
    screenHeight: number = null;
    screenWidth: number = null;


    private loaderVisible: string = 'none';

    constructor(public calendarService : CalendarService, private http: Http){}

    ngOnInit(): void {

    }

    ngAfterViewInit(){
        setTimeout(() => {
            var el = document.querySelector("#" + this.containerId);
            var top = el.getBoundingClientRect().top;
            var left = el.getBoundingClientRect().left;
            this.bgPos = `${-left-1}px ${-top-1}px`;

           window.addEventListener('orientationchange', () => {
               var el = document.querySelector("#" + this.containerId);
               var top = el.getBoundingClientRect().top;
               var left = el.getBoundingClientRect().left;
               let scrollTop = window.scrollY;
               this.bgPos = `${-left-1}px ${-top -scrollTop -1}px`;
           });
            window.addEventListener('resize', () => {
                var el = document.querySelector("#" + this.containerId);
                var top = el.getBoundingClientRect().top;
                var left = el.getBoundingClientRect().left;
                let scrollTop = window.scrollY;
                let bigscreen =  screen.width;
                if(bigscreen > 1280) {
                    this.bgPos = `${-left - 1}px ${-top -scrollTop - 1}px`;
                }
            });
        },0);
        this.isOpened = this.calendarService.userCalendar.doors[(this.doorNumber-1)].open;
        this.isOpened === false && $("#" + this.containerId + " .sparkly").sparklingDoor();
    }

    toggleDoor(): void {
        console.log('Door opened? ' + this.isOpened);
        this.loaderVisible = 'block';
        let targetUrl = 'https://juleluka-api.herokuapp.com/calendar/doors/' + this.doorNumber + '/open';
        let headers = new Headers({'Content-type': 'application/json', 'Accept': 'application/json', 'X-Participant': this.calendarService.userToken});
        this.http.post(targetUrl,'', {headers: headers})
            .toPromise()
            .then((Response: any) => {
                console.log(Response.json());
                Response.json().prize ? this.prize = Response.json().prize : '';
                Response.json().instructions ? this.instructions = Response.json().instructions : '';
                Response.json().quote ? this.doorQuote = Response.json().quote : '';
                Response.json().win ? this.userWin = Response.json().win : false;
                Response.json().imageUrl ? this.imageUrl = Response.json().imageUrl : this.imageUrl = 'http://www.stoltzimage.com/images/white-box-with-bow.jpg';
                Response.json().available ? this.doorAvailable = Response.json().available : false;
                Response.json().open ? this.isOpened = Response.json().available : false;
            })
            .then(() => {
                this.doorOpen = !this.doorOpen;
                this.loaderVisible = 'none';
            })
            .catch((error: any) => {console.log(error); this.loaderVisible = 'none';});
    }

}
