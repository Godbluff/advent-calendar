import { Component, OnInit, Input } from '@angular/core';

@Component({

    selector: 'cc-door',
    moduleId: module.id,
    templateUrl: 'door.component.html',
    styleUrls: ['door.component.css']

})

export class DoorComponent {

    @Input() doorNumber : number;
    @Input() doorQuote : string;
    @Input() containerId: string;
    cardClass: string = 'card';
    doorOpen: boolean = false;
    bgPos: string = '';


    ngOnInit(): void {


    }
    ngAfterViewInit(){
        setTimeout(() => {
            var el = document.querySelector("#" + this.containerId);
            var top = el.getBoundingClientRect().top;
            var left = el.getBoundingClientRect().left;
            this.bgPos = `${-left-1}px ${-top-1}px`;

           window.addEventListener('resize', () => {
               var el = document.querySelector("#" + this.containerId);
               var top = el.getBoundingClientRect().top;
               var left = el.getBoundingClientRect().left;
               this.bgPos = `${-left}px ${-top}px`;
           };
        },0);
    }

    toggleDoor(): void {

        this.doorOpen = !this.doorOpen;

    }

}
