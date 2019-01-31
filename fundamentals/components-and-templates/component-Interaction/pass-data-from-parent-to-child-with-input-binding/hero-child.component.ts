import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-hero-child',
    template: `
        <p>{{hero.name}} is at {{masterName}}'s service</p>
    `
})
export class HeroChildComponent{
    @Input() hero: Hero;
    @Input('master') masterName: string;
}