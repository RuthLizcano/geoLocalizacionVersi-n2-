import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lat: number;
  lon: number;


  constructor(public myLocation: Geolocation) {
       this.getGeolocation();
  }
  getGeolocation(){
    this.myLocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.lat=geoposition.coords.latitude;
      console.log(this.lat);
      this.lon=geoposition.coords.longitude;
      console.log(this.lon);
    },err=>{
      console.log(err);
    });
  }

}

