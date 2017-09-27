import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RunEventsListComponent} from "./run-events-list/run-events-list.component";
import {RunEventDetailsComponent} from "./run-event-details/run-event-details.component";
import {NewRaceEventComponent} from "./new-race-event/new-race-event.component";
import {RunEventsService} from "./services/run-events.service";
import {RacesRoutingModule} from "./races-routing/races-routing.module";

import {
  MaterialModule, MdListModule, MdInputModule, MdDatepickerModule, MdNativeDateModule,
  DateAdapter, NativeDateAdapter, MD_DATE_FORMATS
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import "hammerjs";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {APP_DATE_FORMATS, AppDateAdapter} from "../adapters/date-adapter/AppDateAdapter";
import {PlayersModule} from "../players-module/players.module";
import {NewPlayerComponent} from "../players-module/new-player/new-player.component";
import { RegisterForRaceComponent } from './register-for-race/register-for-race.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdDatepickerModule,
    MdNativeDateModule,
    RacesRoutingModule,
    MdListModule,
    MdInputModule,
    MaterialModule,
    BrowserAnimationsModule,
    PlayersModule
  ],
  declarations: [
    RunEventsListComponent,
    RunEventDetailsComponent,
    NewRaceEventComponent,
    RegisterForRaceComponent,
    NewPlayerComponent,
  ],
  providers: [
    RunEventsService,
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MD_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]

})
export class RacesModule { }
