import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { CountdownChildComponent } from './countdown-child.component';

@Component({
  selector: 'app-countdown-parent',
  template: `
    <h3>Countdown</h3>
    <button (click)="start()">Start</button>
    <button (click)="stop()">Stop</button>
    <div>{{seconds()}}</div>
    <app-countdown-child></app-countdown-child>
`,
  styleUrls: ['../assets/demo.css']
})
export class CountdownParentComponent implements AfterViewInit {
  @ViewChild(CountdownChildComponent)
  private timerComponent: CountdownchildComponent;

  seconds() {
    return 0;
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }

  ngAfterViewInit() {
    setTimeOut( () => this.seconds = ( () => this.timerComponent.seconds ) , 0);
  }
}
