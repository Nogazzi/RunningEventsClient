import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TeamsListComponent} from "./teams-list/teams-list.component";
import {TeamDetailComponent} from "./team-detail/team-detail.component";
import {TeamsService} from "./services/teams.service";
import {NewTeamComponent} from "./new-team/new-team.component";
import {TeamsRoutingModule} from "./teams-routing/teams-routing.module";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MdListModule, MaterialModule, MdInputModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    TeamsRoutingModule,
    MdListModule,
    MdInputModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    TeamsListComponent,
    TeamDetailComponent,
    NewTeamComponent
  ],
  providers: [
    TeamsService
  ]

})
export class TeamsModule { }
