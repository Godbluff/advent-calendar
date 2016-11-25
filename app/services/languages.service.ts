import { Injectable } from '@angular/core';


@Injectable()
export class LanguageService {

    setLanguage: string = 'no';
    texts: any = {
        mainHeader: {
            no: 'Kontorets Adventskalender',
            gb: 'Office Advent Calendar'
        },
        welcome: {
            no1: 'Velkommen til kontorets adventskalender. ',
            no2: 'Kalendere er morsomme og det er alltid godt å vite at når du ankommer kontoret på morgenen, så er det en mulighet for at du har vunnet noe. ' +
            'En pose digg, Pokemon-kort, ,eller en time avspaering på slutten av dagen ' +
            'Uansett hva premien er, så er det noe å snakke om i kaffepausene. ',
            no3: 'Hvem som helst kan lage en kalender, så bare sett i gang. Det er ikke vanskelig i det hele tatt. ' +
            'Klikk på "Opprett ny kalender" om du vil starte en, eller bare skriv inn firmanavn og ditt eget navn for å sjekke om du har noe i kalenderluka i dag.',
            no4: 'Det er spennende tider!',
            gb1: 'Welcome to the Office Advent Calendar. ',
            gb2: 'Calendars are fun, and it is always great to know that every morning, when you get into the office, there will is a possibility that you have won something. ' +
            'A bag of sweets, a pack of Pokemon cards, or an hour off at the end of the day. ' +
            'Whatever the prize, it is something to talk about in coffee breaks. ',
            gb3: 'Anyone can create a calendar, so just get to it. It is not hard at all. ' +
            'Click on the "Create New Calendar" if you want to start one, or just enter your company and your own name to check whats behind the door today for you. ',
            gb4: 'We live in exciting times!',
        },
        loginHead: {
            no: 'Åpne kalender',
            gb: 'Open Calendar'
        },
        calName: {
          no: 'Kalendertittel',
          gb: 'Calendar Name'
        },
        userName: {
            no: 'Deltagernavn',
            gb: 'Participant Name'
        },
        openCal: {
            no: 'Åpne kalender',
            gb: 'View Calendar'
        },
        createNew: {
            no: 'Opprett ny kalender',
            gb: 'Create New Calendar'
        },
        adminCal: {
            no: 'Rediger eksisterende kalender',
            gb: 'Edit Existing Calendar'
        }
    };

    popovers: any = {
        frontCalName: {
            no: 'Skriv inn navnet på kalenderen du er med i.',
            gb: 'Enter the name of the calendar you wish to check.'
        },
        frontUserName: {
            no: 'Skriv inn brukernavnet ditt for denne kalenderen.',
            gb: 'Type in your user name for this calendar.'
        }
    };

    constructor(){ }

}