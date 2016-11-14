import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'front.component.html',
    styleUrls: ['front.component.css']
})
export class FrontComponent {
    public pageTitle: string = 'Welcome';
}
