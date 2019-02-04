import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-voter',
    template: `
        <h3>{{name}}</h3>
        <button (click)="vote(true) [disabled]="didVote">Agree</button>
        <button (click)="vote(false) [disabled]="didVote">Disagree</button>
    `
})
export class VoterComponent {
    didVote=false;
    @Input name: string;
    @Output voted = new EventEmitter<boolean>();
    
    vote(agreed: boolean) {
        this.voted.emit(agreed);
        this.didVote=true;
    }
}