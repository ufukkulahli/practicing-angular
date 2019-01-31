import { Component } from '@angular/core';
import { HEROES } from './hero';

@Component({
    selector: 'app-hero-parent',
    template: `
        <app-hero-child
            *ngFor="let hero of heroes"
            [hero]="hero"
            [master]="master"
        >
        </app-hero-child>
    `
})
export class HeroParentComponent{
    master = 'Sensei';
    heros: HEROES;
}