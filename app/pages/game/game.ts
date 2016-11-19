import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var Phaser:any;
var testMe:boolean = false;

@Component({
  templateUrl: 'build/pages/game/game.html',
})
export class GamePage {

  game;
  player;
  cursors;
  map;
  layer;

  test:string = "fdfd";

  idleStance;


  startSearching:boolean = false;

  constructor(public navCtrl: NavController) {

  }

  ionViewLoaded(){
    this.game = new Phaser.Game(400,320, Phaser.AUTO, 'game', {preload: this.preload, create: this.create, update: this.update});
  }

  preload(){

    console.log(testMe);
    console.log(this.startSearching);
    this.game.load.tilemap('map', 'json/newMap.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('Grass', 'img/grass.png');
    this.game.load.spritesheet('player', 'img/dude40x40.png', 40, 40);
  }

  create(){
    this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;

    this.map = this.game.add.tilemap('map');
    this.map.addTilesetImage("Grass");

    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    this.player = this.game.add.sprite(20 , 20, 'player', 3);
    this.game.physics.arcade.enable(this.player);
    this.player.anchor.setTo(0.5, 0.5);
    this.player.animations.add('left', [0, 1, 2], 10, true);
    this.player.animations.add('right', [4, 5, 6], 10, true);
    this.player.animations.add('up', [7, 8, 9], 10, true);
    this.player.animations.add('down', [10, 3, 11], 10, true);
    this.player.body.collideWorldBounds = true;




    this.cursors = this.game.input.keyboard.createCursorKeys();

  }

  update(){

    this.player.body.velocity.x = 0;
    this.player.body.velocity.y = 0;

    if(this.cursors.up.isDown && this.cursors.left.isDown){
      //  Up key && left key
      this.player.animations.play('left');
      this.idleStance = "left";
      this.player.body.velocity.x = -150;
      this.player.body.velocity.y = -150;
    }else if(this.cursors.up.isDown && this.cursors.right.isDown){
      //  Up key && right key
      this.player.animations.play('right');
      this.idleStance = "right";
      this.player.body.velocity.x = 150;
      this.player.body.velocity.y = -150;
    }else if(this.cursors.up.isDown && !this.cursors.left.isDown && !this.cursors.right.isDown){
      //  Up key only
      this.player.animations.play('up');
      this.idleStance = "up";
      this.player.body.velocity.y = -150;
    }else if(this.cursors.down.isDown && this.cursors.left.isDown){
      //  Down key && left key
      this.player.animations.play('left');
      this.idleStance = "left";
      this.player.body.velocity.x = -150;
      this.player.body.velocity.y = 150;
    }else if(this.cursors.down.isDown && this.cursors.right.isDown){
      // Down key && right key
      this.player.animations.play('right');
      this.idleStance = "right";
      this.player.body.velocity.x = 150;
      this.player.body.velocity.y = 150;
    }else if( this.cursors.down.isDown && !this.cursors.left.isDown && !this.cursors.right.isDown){
      //  Down key only!
      this.player.animations.play('down');
      this.idleStance = "down";
      this.player.body.velocity.y = 150;
    }else if (this.cursors.left.isDown && !this.cursors.up.isDown && !this.cursors.down.isDown){
      //  Move to the left
      this.player.animations.play('left');
      this.idleStance = "left";
      this.player.body.velocity.x = -150;
    }
    else if (this.cursors.right.isDown && !this.cursors.up.isDown && !this.cursors.down.isDown){
      //  Move to the right
      this.player.animations.play('right');
      this.idleStance = "right";
      this.player.body.velocity.x = 150;
    }else{
      this.player.animations.stop();
      switch (this.idleStance) {
        case "left":
          this.player.frame = 1;
          break;
        case "right":
          this.player.frame = 5;
          break;
        case "down":
          this.player.frame = 3;
          break;
        case "up":
          this.player.frame = 8;
          break;
      }
    }


  }


}
