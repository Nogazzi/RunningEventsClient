import {MaterialModule, MdListModule, MdInputModule, MdNativeDateModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import "hammerjs";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlayersService} from "./services/players.service";
import {PlayersListComponent} from "./players-list/players-list.component";
import {PlayerDetailsComponent} from "./player-details/player-details.component";
import { NewPlayerComponent } from './new-player/new-player.component';
import {PlayersRoutingModule} from "./players-routing/players-routing.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    PlayersRoutingModule,
    MdListModule,
    MdInputModule,
    MdNativeDateModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [
    PlayersService
  ],
  declarations: [
    PlayersListComponent,
    PlayerDetailsComponent,
    NewPlayerComponent
  ]
})
export class PlayersModule { }
