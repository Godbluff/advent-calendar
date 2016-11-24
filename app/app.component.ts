import { Component, OnInit } from '@angular/core';
import { CalendarService } from "./services/calendar.service";
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import { LanguageService } from "./services/languages.service";


@Component({

    selector: 'ca-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    providers: [ CalendarService, LanguageService ]
})


export class AppComponent {
    errorMessage: string = '';
    pageTitle: 'Christmas Calendar';

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
            window.scroll(0, 0);
        });
    }

}
