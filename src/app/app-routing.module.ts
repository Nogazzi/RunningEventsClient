/**
 * Created by Nogaz on 11.08.2017.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RunEventsListComponent} from './races-module/run-events-list/run-events-list.component';
import {RunEventDetailsComponent} from './races-module/run-event-details/run-event-details.component';
import {NewRaceEventComponent} from "./races-module/new-race-event/new-race-event.component";

const routes: Routes = [
  //map /persons to the people list component
  {path: '', redirectTo: '/races', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
