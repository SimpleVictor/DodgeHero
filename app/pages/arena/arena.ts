import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GameLobbyPage} from "../game-lobby/game-lobby";

@Component({
  templateUrl: 'build/pages/arena/arena.html',
})
export class ArenaPage {
  constructor(public navCtrl: NavController) {

  }

  EnterLobby(){
    this.navCtrl.push(GameLobbyPage);
  }

}
