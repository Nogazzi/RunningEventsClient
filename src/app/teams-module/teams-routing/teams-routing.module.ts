import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {TeamsListComponent} from "../teams-list/teams-list.component";
import {TeamDetailComponent} from "../team-detail/team-detail.component";
import {NewTeamComponent} from "../new-team/new-team.component";

const teamsRoutes: Routes = [
  {path: 'teams',     component: TeamsListComponent},
  {path: 'teams/:id', component: TeamDetailComponent},
  {path: 'registerteam', component: NewTeamComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(teamsRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class TeamsRoutingModule { }
