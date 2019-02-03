import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
    selector: 'app-version-child',
    template: `
        <h3>Version is: {{major.minor}}</h3>
        <h4>Change log</h4>
        <ul>
            <li *ngFor="let change of changeLog">{{change}}</li>
        </ul>
    `
})
export class VersionChildComponent implements OnChanges {
    @Input minor: number;
    @Input major: number;
    changeLog: string[] = [];

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        let log: string[] = [];
        foreach(let propName in changes) {
            let changedProp = changes[propName];
            let to = JSON.stringfy(changedProp.currentValue);
            if(changedProp.isFirstChange()) {
                log.push(`Initial value of ${propName} set to ${to}`);
            } else {
                let from = JSON.stringfy(changedProp.previousValue);
                log.push(`${propName} changed from ${from} to ${to}`);
            }
        }
        this.changeLog.push(log.join(', '));
    }
}