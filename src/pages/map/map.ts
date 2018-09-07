import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare const google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})


export class MapPage {
map;
coordenadas=[
  {lat:4.592934,lng: -74.079161},
  {lat:4.588271,lng: -74.112336},
  {lat:4.582544,lng: -74.095198},
  {lat:4.584288,lng: -74.097665},
  {lat:4.583731,lng: -74.095884},
  {lat:4.582491,lng: -74.095465}];
  marcadores=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.initMap();
    console.log('ionViewDidLoad MapPage');
  }
  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 4.590177, lng: -74.081285 },
      zoom: 15
    });
    let marker = new google.maps.Marker({
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: { lat: 4.590177, lng: -74.081285 }
    });
    marker.addListener('click', () => {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    });
    this.coordenadas.forEach((coordenada)=>{
      let mark = new google.maps.Marker({
        map: this.map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position:coordenada
      });
      this.marcadores.push(mark);
    });
  }
}
