import { Component, OnInit } from '@angular/core';
import { EditorService } from './editor.service';

@Component({
    selector: 'ed-app',
    moduleId: module.id,
    templateUrl: 'editor.component.html',
    styleUrls: ['editor.component.css']
})


export class EditorComponent implements OnInit {
    highlightStatus: Array<boolean> = [true];
    selectedDoor: any = {
    };
    newParticipant: string = '';
    calendar = {};
    filled: any  = [];

    constructor(public editorService: EditorService) { }

    ngOnInit(): void {
        let service = this.editorService;
        service.calendar.id.length > 0 ? console.log('Got Calendar') : console.log('No Calendar');
        this.selectedDoor = service.calendar.doors[0];

//        LocalStorage for retrieval after refresh.
//        let retrievedToken = localStorage.getItem('CCUser');
//        let parsedToken = JSON.parse(retrievedToken);
//        service.getEditableCalendar(parsedToken.token, 'editor component ngOnInit');

    }


    showDoorData(doorNr:any): void {
        let service = this.editorService;
        this.selectedDoor = service.calendar.doors[doorNr];
        this.highlightStatus = [];
        this.highlightStatus[doorNr] =! this.highlightStatus[doorNr];
        // Precursor for conditionally adding visuals for doors to see if content has been filled in.
        ("prize" in this.selectedDoor) && console.log('Got prize');
    }


    addParticipant(name: any) {
        let service = this.editorService;
        let token = service.authToken;
        if (service.calendar.participants.filter((p: any) => p.name == this.newParticipant).length > 0) {
            this.newParticipant = 'Participant already added.';
            setTimeout(() => {this.newParticipant = ''},2000);
            console.log('Already in the participants list, dude!');
        }
        else if(this.newParticipant.length >= 2) { service.insertParticipant(name, token);
            this.newParticipant = '';}
    }


    removeParticipant(loc: number){
        let service = this.editorService;
        let token = service.authToken;
        let user = service.calendar.participants[loc].id;
        service.calendar.participants.splice(loc,1);
        service.deleteParticipant(user, token);
    }


    updateEntry(key: string){
        let service = this.editorService;
        let door = this.selectedDoor.number;
        service.calendar.doors[this.selectedDoor.number-1][key] = this.selectedDoor[key];
        service.updateDoor(door-1);
    }


    doorCheck(){
        this.filled = [];
        ("prize" in this.selectedDoor)
            ? this.selectedDoor.prize.length > 5
                ? this.filled.push(1)
                : ''
            : this.filled.slice(1);
        console.log(this.filled);
    }

}