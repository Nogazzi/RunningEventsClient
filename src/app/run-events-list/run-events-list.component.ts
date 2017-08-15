import {Component, OnInit} from '@angular/core';
import {SportEvent} from "../sport-event";
import {RunEventsService} from "../run-events.service";

@Component({
  selector: 'run-events-list',
  template: `
    <!--<section *ngIf="isLoading && !errorMessage">
    Loading our hyperdrives!!! Retrieving data...
    </section>-->
    <ul>
      <li *ngFor="let sportevent of sportEvents">
        <a href="#" [routerLink]="['/races/', sportevent.id]">
        {{sportevent.name}}
        </a>
      </li>
    </ul>
    <section *ngIf="errorMessage">
      {{errorMesage}}
    </section>
  `,
  styleUrls: ['./run-events-list.component.scss']
})
export class RunEventsListComponent implements OnInit {
  sportEvents: SportEvent[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private runEventsService: RunEventsService) {
  }

  ngOnInit() {
    this.runEventsService
      .getAll()
      .subscribe(
        /* happy path */ p => this.sportEvents = p,
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ ()=> this.isLoading = false);
  }

}
