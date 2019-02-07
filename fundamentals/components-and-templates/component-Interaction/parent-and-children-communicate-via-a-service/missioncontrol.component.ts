import { Component } from '@angular/core';
import { MissionService } from './mission.service';

@Component({
  selector: 'app-mission-control',
  template: `
    <h2>Mission Control</h2>
    <button (click)="announce()">Announce mission</button>
    <app-astronaut *ngFor="let astronaut of astronauts" [astronaut]="astronaut"></app-astronaut>
    <h3>History</h3>
    <ul><li *ngFor="let event of history">{{event}}</li></ul>
  `,
  providers: [MissionService]
})
export class MissionControlComponent {
  astronauts = ['Yuri Gagarin', 'Alan Shepard', 'Virgil Grossom'];  
  history: strin[] = [];
  missions = ['Flight to Moon', 'Flight to Mars', 'Flight to Pluton'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
        astronaut => {this.history.push(`${astronaut} confirmed the mission`);}
    );
  }

  announce(){
    let mission = this.missions[this.missionNext++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced!`);
    if(this.nextMission >= this.missions.length){this.nextMission=0;}
  }
}
