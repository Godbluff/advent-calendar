import {Component} from '@angular/core';

@Component({
    selector: 'cc-modal',
    moduleId: module.id,
    templateUrl: 'calendar.modal.html',
    styleUrls: ['calendar.modal.css']
})
export class CalendarModal {

    opened: boolean = false;
    size: string;

    noHeader: boolean = false;
    noFooter: boolean = false;
    directional: boolean = false;
    mainText: string = '';
    modalImage: string = 'http://www.stoltzimage.com/images/white-box-with-bow.jpg';
    prizeText: string =  '';
    doorNumber: number = null;

    open(size?: string, bodyText?: string, prizeText?: string, doorNumber?: number, imageUrl: string) {
        this.mainText = bodyText;
        this.prizeText = prizeText;
        this.doorNumber = doorNumber;
        this.modalImage = imageUrl;
        this.size = size;
        this.opened = !this.opened;

    }

    cancel() {
        this.opened = false;
    }
}