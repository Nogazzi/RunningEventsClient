import {Component, OnInit} from '@angular/core';
import {RunEventsService} from "../services/run-events.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RaceResult} from "../entities/race-result";
import {SportEvent} from "../entities/sport-event";
import {TeamsService} from "../../teams-module/services/teams.service";

@Component({
  selector: 'app-register-for-race',
  templateUrl: './register-for-race.component.html',
  styleUrls: ['./register-for-race.component.scss']
})
export class RegisterForRaceComponent implements OnInit {
  sportEvent: SportEvent;
  raceResult: RaceResult;
  sub: any;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private runEventsService: RunEventsService,
              private teamService: TeamsService) { }

  ngOnInit() {
    console.log('RegisterForRaceComponent OnInit');
    this.raceResult = new RaceResult();

    /*this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; });*/
    console.log("ID: ", this.id);
     //this.runEventsService.get(this.id).subscribe(event => this.sportEvent = event);
    /*this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log('getting sportEvent with id: ', id);
      this.runEventsService
        .get(id)
        .subscribe(p => this.sportEvent = p);
    });*/
    console.log("downloaded event: ", JSON.stringify(this.sportEvent));
  }

  registerForRunEvent(){
    console.log('saved!!!', this.raceResult);
    return this.runEventsService.registerForRunEvent(this.raceResult);
    /*let link = ['races/'];
    this.router.navigate(link);*/
  }

}
