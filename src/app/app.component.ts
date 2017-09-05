import { Component } from '@angular/core';
import {MdMenuModule} from '@angular/material';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  title = 'Star Wars PPlz!!!!';

  constructor(private router: Router){

  }


  gotoRaceList(){
    let link = ['/races'];
    this.router.navigate(link);
  }

  gotoAddNewEvent(){
    let link = ['/add'];
    this.router.navigate(link);
  }
}
