import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ArenaPage} from "../arena/arena";

@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  LoginEnter(){
    this.navCtrl.push(ArenaPage);
  }
}
