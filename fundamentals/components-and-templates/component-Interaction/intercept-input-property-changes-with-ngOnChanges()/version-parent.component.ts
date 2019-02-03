import { Component } from '@angular/core';

@Component({
    selector: 'app-version-parent',
    template: `
        <button (click)="newMinor()">New minor version</button>
        <button (click)="newMajor()">New major version</button>
        <app-version-child [major]="major" [minor]="minor"></app-version-child>
    `
})
export class VersionParentComponent {
    minor=1;
    major=23;

    newMinor() {
        this.minor++;
    }

    newMajor() {
        this.major++;
        this.minor=0;
    }
}