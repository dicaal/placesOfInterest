import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import {Platform} from 'ionic-angular';


declare var Connection;
/*
  Generated class for the ConnectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectProvider {

  onDevice: boolean;

  constructor(public http: HttpClient, public platform : Platform, public network: Network) {
    console.log('Hello ConnectProvider Provider');
    this.onDevice = this.platform.is('cordova');
  }

  isOnline(): boolean {
    console.log("is on line")
    if(this.onDevice && this.network.type){
      
      return this.network.type !== Connection.NONE;
    } else {
      return navigator.onLine;
    }
  }

  isOffline(): boolean {
    console.log("is off line")
    if(this.onDevice && this.network.type){
      
      return this.network.type === Connection.NONE;
    } else {
      return !navigator.onLine;  
    }
  }


}
