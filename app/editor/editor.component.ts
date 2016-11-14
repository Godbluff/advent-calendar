import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ed-app',
    moduleId: module.id,
    templateUrl: 'editor.component.html',
    styleUrls: ['editor.component.css']
})


export class EditorComponent {
    company: any =  {
        logoUrl: '',
        name: '',
        admin: '',
        doors: [
            {
                number: '',
                quote: '',
                prize: '',
                prizeImgUrl: '',
                winners: [1, 2, 3]
            }
        ]


    };
    constructor() {

    }

    ngOnInit(): void {

    }

}