import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MaterialModule, MdListModule, MdInputModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import "hammerjs";

import {AppComponent} from "./app.component";

import {RacesModule} from "./races-module/races.module";
import {UsersModule} from "./users-module/users.module";
import {TeamsModule} from "./teams-module/teams.module";

import {RacesRoutingModule} from "./races-module/races-routing/races-routing.module";
import {UsersRoutingModule} from "./users-module/users-routing/users-routing.module";
import {TeamsRoutingModule} from "./teams-module/teams-routing/teams-routing.module";
import {PlayersRoutingModule} from "./players-module/players-routing/players-routing.module";
import {AppRoutingModule} from "./app-routing.module";
import {PlayersModule} from "./players-module/players.module";
import {Router} from "@angular/router";
//import { PeopleResultsComponent } from './race-module/people-results/people-results.component';


@NgModule({
  declarations: [
    AppComponent,
    //PeopleResultsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdListModule,
    MdInputModule,
    MaterialModule,
    BrowserAnimationsModule,

    RacesModule,
    PlayersModule,
    TeamsModule,
    UsersModule,

    AppRoutingModule,
    RacesRoutingModule,
    TeamsRoutingModule,
    PlayersRoutingModule,
    UsersRoutingModule


  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
