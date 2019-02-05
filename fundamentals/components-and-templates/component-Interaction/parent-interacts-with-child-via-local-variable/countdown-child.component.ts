import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-countdown-child',
    template: '<p>{{message}}</p>'
})
export class CountdownChildComponent implements OnInit, OnDestroy {
    message='';
    intervalId=0;
    seconds=11;

    ngOnInit(){
        this.start();
    }

    ngOnDestroy(){
        this.clearTimer();
    }

    start(){
        this.countDown();
    }

    stop(){
        this.clearTimer();
        this.message = `Holding at T-${this.seconds} seconds`
    }

    clearTimer(){
        clearInterval(this.intervalId);
    }

    countDown(){
        this.clearTimer();
        this.intervalId = window.setInterval( () => {
            this.seconds -= 1;
            if(this.seconds === 0){
                this.message = 'Big Bang!!!';
            } else {
                if (this.seconds < 0) { this.seconds = 10; }
                this.message = `T-${this.seconds} seconds and counting`;
              }
        }, 1000);
    }
}