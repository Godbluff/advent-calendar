import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div class="christmasbg">
            <div style="padding-top: 10px; width: 100%; height: 50px; line-height: 50px; text-align: center; font-size: 40px; text-shadow: 0px 0px 4px black;">Angular Calendar Coming Soon...</div>
            <cc-door *ngFor="let door of doorSequence; let i = index;" [doorNumber]="door" [doorQuote]="doorContent[door-1]"></cc-door>
        </div>
    `
})
export class AppComponent {
    doorSequence: any = [1,5,3,17,23,8,9,13,21,4,19,22,2,11,15,18,6,12,7,10,14,16,20,24];
    anyThing: string = 'Passed through.';
    doorContent: any =[
        {
            quote: 'hello!'
        },
        {
            quote: 'I am here.'
        },
        {
            quote: 'Merry Xmas'
        },
        {
            quote: 'Santa is Waiting'
        },
        {
            quote: 'Krampus! Oh No!'
        },
        {
            quote: 'Keep Baking.'
        },
        {
            quote: 'Presents all done?'
        },
        {
            quote: 'Looking Good.'
        },
        {
            quote: 'Keep the Children happy.'
        },
        {
            quote: 'Lost Cause.'
        },
        {
            quote: 'This is not the day.'
        },
        {
            quote: 'Roger.'
        },
        {
            quote: 'Checklist time.'
        },
        {
            quote: 'The Insanity begins'
        },
        {
            quote: 'You awake?'
        },
        {
            quote: 'No phone for you.'
        },
        {
            quote: 'Keep baking.'
        },
        {
            quote: 'Turkey time.'
        },
        {
            quote: 'Stickmeat!'
        },
        {
            quote: 'Sausage!'
        },
        {
            quote: 'Last minute Prep.'
        },
        {
            quote: 'Almost there.'
        },
        {
            quote: 'Don\'t Panic'
        },
        {
            quote: 'Merry Christmas!'
        }
    ];

}
