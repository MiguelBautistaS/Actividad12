import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  casas = [];
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v1/casas/').subscribe( data => {
      this.casas = data['casas'];
      console.log(JSON.stringify(this.casas));

    }, error => {
      console.log(JSON.stringify(error));
    });

  }

  info(casa){
    console.log(JSON.stringify(casa));
  }

  search(){
    console.log("Buscando");
  }

}
