import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'editor-door',
    moduleId: module.id,
    templateUrl: 'editor.door.component.html',
    styleUrls: ['editor.door.component.css']
})


export class EditorDoorComponent {
    number: number = 1;
    quote: string = 'Come Fly With Me.';
    prize: string  = '4 agruker fra Rimi';
    prizeImgUrl: string = 'http://www.haifa-group.com/files/Guides/Cucumber/pickling-cucumbers.jpg';
    winners: any =  [1, 2, 3];

    constructor() {

    }

    ngOnInit(): void {

    }

}