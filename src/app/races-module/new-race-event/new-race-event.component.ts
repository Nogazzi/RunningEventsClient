import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {SportEvent} from "../entities/sport-event";
import {RunEventsService} from "../services/run-events.service";

@Component({
  selector: 'app-new-race-event',
  templateUrl: './new-race-event.component.html',
  styleUrls: ['./new-race-event.component.scss']
})
export class NewRaceEventComponent implements OnInit {
  sportEvent: SportEvent;
  constructor(private router: Router,
              private runEventsService: RunEventsService) {
    console.log('NewRaceEventComponent contructor');
  }

  ngOnInit() {
    console.log('NewRaceEventComponent OnInit');
  }

  registerNewRunEvent(sportEvent:SportEvent){
    //this.runEventsService.registerNewRunEvent(this.sportEvent);
    console.log('saved!!!', this.sportEvent);
    let link = ['races/'];
    this.router.navigate(link);
  }

  gotoRaceList(){
    let link = ['races/'];
    this.router.navigate(link);
  }
}
