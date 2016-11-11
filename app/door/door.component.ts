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

    ngOnInit(): void {
    }

    toggleDoor(): void {
        this.doorOpen = !this.doorOpen;
    }

}
