import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserLoginComponent} from "../user-login/user-login.component";

const usersRoutes: Routes = [
  {path: 'login',     component: UserLoginComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
