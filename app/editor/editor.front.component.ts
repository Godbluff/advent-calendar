import { Component, OnInit } from '@angular/core';
import { EditorService } from './editor.service';

@Component({
    moduleId: module.id,
    templateUrl: 'editor.front.component.html',
    styleUrls: ['editor.front.component.css']
})
export class EditorFrontComponent implements OnInit {
    public pageTitle: string = 'Create New Calendar';

    companyName: string = '';
    adminPassword : string = '';

    companyName2: string = '';
    adminPassword2 : string = '';

    constructor(public editorService: EditorService){

    }
    ngOnInit(){}

}
