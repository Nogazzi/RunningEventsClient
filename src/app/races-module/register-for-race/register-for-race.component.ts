import { Component, OnInit } from '@angular/core';
import {RunEventsService} from "../services/run-events.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register-for-race',
  templateUrl: './register-for-race.component.html',
  styleUrls: ['./register-for-race.component.scss']
})
export class RegisterForRaceComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private runEventsService: RunEventsService) { }

  ngOnInit() {
  }



}
