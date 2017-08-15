/**
 * Created by Nogaz on 11.08.2017.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunEventsListComponent } from './run-events-list/run-events-list.component';
import { RunEventDetailsComponent } from './run-event-details/run-event-details.component';

const routes: Routes = [
  //map /persons to the people list component
  {
    path: 'races',
    component: RunEventsListComponent
  },
  {
    path: 'races/:id',
    component: RunEventDetailsComponent
  },
  //map / to /persons as default route
  {
    path: '',
    redirectTo: '/races',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
