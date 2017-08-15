import {Component, OnInit, OnDestroy} from '@angular/core';
import {SportEvent} from "../sport-event";
import {ActivatedRoute, Router} from "@angular/router";
import {RunEventsService} from "../run-events.service";

@Component({
  selector: 'run-event-details',
  templateUrl: './run-event-details.component.html',
  styleUrls: ['./run-event-details.component.scss']
})
export class RunEventDetailsComponent implements OnInit{

  sportEvent: SportEvent;
  sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private runEventsService: RunEventsService){ }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log('getting sportEvent with id: ', id);
      this.runEventsService
        .get(id)
        .subscribe(p => this.sportEvent = p);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  gotoRaceList(){
    let link = ['races/'];
    this.router.navigate(link);
  }

  saveRunEventDetails(){
    this.runEventsService.save(this.sportEvent);
    alert(`saved!!! &{JSON.stringify(this.person)}`);
  }

}
