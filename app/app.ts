import { Component } from '@angular/core';
import { ionicBootstrap, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import {HomePage} from "./pages/home/home";


@Component({
  template: `

<ion-menu [content]="content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Pages</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <button ion-item (click)="openPage(loginPage)">
        Login
      </button>
      <button ion-item (click)="openPage(signupPage)">
        Signup
      </button>
    </ion-list>
  </ion-content>
</ion-menu>

<ion-nav id="nav" #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(public platform: Platform, menu: MenuController) {
    platform.ready().then(() => {
      menu.enable(true);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp,[],{
  iconMode: "md"
});
