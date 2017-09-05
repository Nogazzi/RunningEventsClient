import { Component, OnInit } from '@angular/core';
import {PlayersService} from "../services/players.service";
import {Player} from "../entities/Player";
import {Router} from "@angular/router";

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  players: Player[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private playersService: PlayersService,
              private router: Router) {
  }

  ngOnInit() {
    this.playersService
      .getAll()
      .subscribe(
        /* happy path */ p => this.players = p,
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ ()=> this.isLoading = false);
  }

  removePlayer(id: number){
    let log = this.playersService.removePlayer(id);
    console.log('deleted player with id: ', id);
    let link = ['/'];
    location.reload();
  }

}
