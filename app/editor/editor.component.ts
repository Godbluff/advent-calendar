import { Component, OnInit } from '@angular/core';
import { EditorService } from './editor.service';

@Component({
    selector: 'ed-app',
    moduleId: module.id,
    templateUrl: 'editor.component.html',
    styleUrls: ['editor.component.css']
})


export class EditorComponent implements OnInit {
    highlightStatus: Array<boolean> = [];
    selectedDoor: any = {
    };
    newParticipant: string = '';
    calendar = {};

    constructor(public editorService: EditorService) {

    }

    ngOnInit(): void {
        let service = this.editorService;
        console.log('Hello Editor.');
        service.editCalendar(service.calendar.companyName, service.calendar.password);
        this.selectedDoor = service.calendar.doors[0];

//        let retrievedToken = localStorage.getItem('CCUser');
//        let parsedToken = JSON.parse(retrievedToken);
//        service.getEditableCalendar(parsedToken);


    }
    ngOnInitView(){
        console.log(service.calendar.authToken ? 'Have now token to save' : 'Still no token to save.');
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
        if (service.calendar.participants.filter((p: any) => p.name == this.newParticipant).length > 0) {
            this.newParticipant = 'Participant already added.';
            setTimeout(() => {this.newParticipant = ''},2000);
            console.log('Already in the participants list, dude!');
        }
        else if(this.newParticipant.length >= 2) { service.calendar.participants.push({ id: 1234, name: name });
            this.newParticipant = '';}
        service.insertParticipant(name, service.calendar.authToken);

    }

    removeParticipant(loc: number){
        let service = this.editorService;
        let name = service.calendar.participants[loc].name;
        service.calendar.participants.splice(loc,1);
        service.deleteParticipant(name);
    }

    updateEntry(key: string){
        let service = this.editorService;
        service.calendar.doors[this.selectedDoor.number-1][key] = this.selectedDoor[key];
    }

    doorCheck(){
        this.selectedDoor.filled = [];
        ("prize" in this.selectedDoor)
            ? this.selectedDoor.prize.length > 5
                ? this.selectedDoor.filled.push(1)
                : ''
            : this.selectedDoor.filled.slice(1);
        console.log(this.selectedDoor.filled);
    }

}