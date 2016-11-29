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
    instructionText: string = '';
    modalImage: string = 'http://www.stoltzimage.com/images/white-box-with-bow.jpg';
    prizeText: string =  '';
    doorNumber: number = null;
    win: boolean = false;
    outcomeText: string = '';

    openModal(imageUrl: string, win: boolean, size?: string, prizeText?: string, doorNumber?: number, instructionText?: string ) {
        this.win = win;
        this.prizeText = prizeText;
        this.doorNumber = doorNumber;
        this.instructionText = instructionText;
        this.modalImage = imageUrl;
        win ? this.outcomeText =  'Gratulerer! Du har vunnet!' : this.outcomeText = 'Dessverre. Du vant ikke i dag';
        this.size = size;
        this.opened = !this.opened;

    }

    cancel() {
        this.opened = false;
    }
}