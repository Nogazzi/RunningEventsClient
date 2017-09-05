import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Player} from "../../players-module/entities/Player";
import {PlayersService} from "../../players-module/services/players.service";
import {TeamsService} from "../services/teams.service";
import {Team} from "../entities/team";

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  players: Player[] = [];
  sub: any;
  team: Team;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private playersService: PlayersService,
              private teamsService: TeamsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log('getting sportEvent with id: ', id);
      this.teamsService
        .get(id)
        .subscribe(p => this.team = p,
          e => this.errorMessage = e,
          /* onComplete */ ()=> {
            console.log('TEAM: ', this.team);
            this.playersService
              .getByTeamName(this.team.name)
              .subscribe(p => this.players = p);
          });


    });

  }

}
