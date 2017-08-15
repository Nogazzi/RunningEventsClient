import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { RunEventsListComponent} from './run-events-list/run-events-list.component';
import { RunEventsService} from './run-events.service';
import { RunEventDetailsComponent} from './run-event-details/run-event-details.component';

import { AppRoutingModule } from "./app-routing.module";
import { MinValidatorDirective } from './min-validator.directive';
import { MaxValidatorDirective } from './max-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    RunEventsListComponent,
    RunEventDetailsComponent,
    MinValidatorDirective,
    MaxValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [RunEventsService]
})
export class AppModule { }
