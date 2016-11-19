import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GamePage} from "../game/game";

@Component({
  templateUrl: 'build/pages/game-lobby/game-lobby.html',
})
export class GameLobbyPage {
  constructor(public navCtrl: NavController) {

  }

  StartGame(){
    this.navCtrl.push(GamePage);
  }

}
