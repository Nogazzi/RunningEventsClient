import {Component, OnInit, OnDestroy } from '@angular/core';
import {SportEvent} from "../entities/sport-event";
import {RunEventsService} from "../services/run-events.service";
import {Router} from "@angular/router";

@Component({
  selector: 'run-events-list',
  templateUrl: './run-events-list.component.html',
  styleUrls: ['./run-events-list.component.scss']
})
export class RunEventsListComponent implements OnInit {
  sportEvents: SportEvent[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private runEventsService: RunEventsService,
              private router: Router) {
  }

  ngOnInit() {
    this.runEventsService
      .getAll()
      .subscribe(
        /* happy path */ p => this.sportEvents = p,
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ ()=> this.isLoading = false);
  }

  ngOnDestroy() {

  }

  removeEvent(id: number){
    let log = this.runEventsService.removeEvent(id);
    console.log('deleted event with id: ', id);
    let link = ['/'];
    location.reload();
  }
}
