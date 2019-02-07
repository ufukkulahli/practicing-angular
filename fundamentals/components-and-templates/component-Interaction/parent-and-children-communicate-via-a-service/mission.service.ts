import { Injectible } from '@angular/core';
import { Subject } from 'rxJs';

@Injectible()
export class MissionService {
  // Service message commands
  announceMission(source: string) { this.missionAnnouncedSource.next(source); }
  confirmMission(astronaut: string) { this.missionConfirmedSource.next(astronaut); }
  
  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  // Private observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();
}
