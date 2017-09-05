import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RunEventsListComponent} from "./run-events-list/run-events-list.component";
import {RunEventDetailsComponent} from "./run-event-details/run-event-details.component";
import {NewRaceEventComponent} from "./new-race-event/new-race-event.component";
import {RunEventsService} from "./services/run-events.service";
import {RacesRoutingModule} from "./races-routing/races-routing.module";

import {MaterialModule, MdListModule, MdInputModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import "hammerjs";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RacesRoutingModule,
    MdListModule,
    MdInputModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    RunEventsListComponent,
    RunEventDetailsComponent,
    NewRaceEventComponent
  ],
  providers: [
    RunEventsService
  ]

})
export class RacesModule { }
