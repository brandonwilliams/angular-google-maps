import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular 4 + Google Maps';
  latInput: number = 40.7128;
  lngInput: number = -74.0059;
  lat: number = this.latInput;
  lng: number = this.lngInput;

  constructor(){}

  mapClicked($event: any){
    console.log('Initial lat: '+this.lat+' and lng: '+this.lng);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.latInput = this.lat;
    this.lngInput = this.lng;
    console.log('New lat: '+this.lat+' and lng: '+this.lng);
  }

  markerDragEnd($event){
    console.log('Initial lat: '+this.lat+' and lng: '+this.lng);
    this.lat = parseFloat($event.coords.lat);
    this.lng = parseFloat($event.coords.lng);
    this.latInput = this.lat;
    this.lngInput = this.lng;
    console.log('New lat: '+this.lat+' and lng: '+this.lng);
  }

}
