import {Component, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {SportEvent} from "../entities/sport-event";
import {RunEventsService} from "../services/run-events.service";
import {MdDatepicker} from "@angular/material";

@Component({
  selector: 'app-new-race-event',
  templateUrl: './new-race-event.component.html',
  styleUrls: ['./new-race-event.component.scss']
})
export class NewRaceEventComponent implements OnInit {
  sportEvent: SportEvent;
  sub: any;

  constructor(private router: Router,
              private runEventsService: RunEventsService) {
    console.log('NewRaceEventComponent contructor');

  }

  ngOnInit() {
    console.log('NewRaceEventComponent OnInit');
    this.sportEvent = new SportEvent();
  }

  registerNewRunEvent(){
    console.log('saved!!!', this.sportEvent);
    this.runEventsService.registerNewRunEvent(this.sportEvent);
    /*let link = ['races/'];
    this.router.navigate(link);*/
  }

  gotoRaceList(){
    let link = ['races/'];
    this.router.navigate(link);
  }
}
