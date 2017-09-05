import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PlayersListComponent} from "../players-list/players-list.component";
import {PlayerDetailsComponent} from "../player-details/player-details.component";
import {NewPlayerComponent} from "../new-player/new-player.component";



const playersRoutes: Routes = [
  {path: 'players',                 component: PlayersListComponent},
  {path: 'players/:id',             component: PlayerDetailsComponent},
  {path: 'newplayer',  component: NewPlayerComponent}
  ]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(playersRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class PlayersRoutingModule { }
