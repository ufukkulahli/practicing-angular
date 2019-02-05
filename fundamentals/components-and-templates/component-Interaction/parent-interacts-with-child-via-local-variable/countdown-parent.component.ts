import { Component } from '@angular/core';
import { CountdownChildComponent } from './countdown-child.component';

@Component({
    selector: 'app-countdown-parent',
    template: `
        <h3>Countdown to big bang</h3>
        <button (click)="timer.start()">Start</button>
        <button (click)="timer.stop()">Stop</button>
        <div class="seconds">{{timer.seconds}}</div>
        <app-countdown-child #timer></app-countdown-child>
    `,
    styleUrls: ['../assets/demo.css']
})
export class CountdownParentComponent {
}