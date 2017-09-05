import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import {MaterialModule, MdInputModule, MdListModule, MdNativeDateModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {UsersService} from "./services/users.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdListModule,
    MdInputModule,
    MdNativeDateModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [UserLoginComponent],
  providers: [UsersService]
})
export class UsersModule { }
