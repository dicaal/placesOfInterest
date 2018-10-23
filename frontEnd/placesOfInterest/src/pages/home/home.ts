import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { LocationProvider } from '../../providers/location/location';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  constructor(public navCtrl: NavController, public maps: GoogleMapsProvider, public platform: Platform, public location: LocationProvider ) {

  }

  ionViewDidLoad(){
 
    this.platform.ready().then(() => {
 
        let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
 
    });
 
  }

}
