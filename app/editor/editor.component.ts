import { Component, OnInit } from '@angular/core';
import { EditorService } from './editor.service';

@Component({
    selector: 'ed-app',
    moduleId: module.id,
    templateUrl: 'editor.component.html',
    styleUrls: ['editor.component.css'],
    providers: [ EditorService ]
})


export class EditorComponent implements OnInit {
    highlightStatus: Array<boolean> = [];
    selectedDoor: any = {
    };
    newParticipant: string = '';

    constructor(private editorService: EditorService) {

    }

    ngOnInit(): void {
        console.log('Initiating Editor.');
        this.selectedDoor = this.editorService.doors[0];
    }

    showDoorData(doorNr:any): void {
        this.selectedDoor = this.editorService.doors[doorNr];
        this.highlightStatus = [];
        this.highlightStatus[doorNr] =! this.highlightStatus[doorNr];
        // Precursor for conditionally adding visuals for doors to see if content has been filled in.
        ("prize" in this.selectedDoor) && console.log('Got prize');
    }

    addParticipant(name: any) {
        if (this.editorService.participants.filter((p: any) => p.name == this.newParticipant).length > 0) {
            this.newParticipant = 'Participant already added.';
            setTimeout(() => {this.newParticipant = ''},2000);
            console.log('Already in the participants list, dude!');
        }
        else if(this.newParticipant.length >= 2) { this.editorService.participants.push({ id: 1234, name: name });
            this.newParticipant = '';}

    }

    removeParticipant(loc: number){
        this.editorService.participants.splice(loc,1);
    }

    updateEntry(key: string){
        this.editorService.doors[this.selectedDoor.number-1][key] = this.selectedDoor[key];
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