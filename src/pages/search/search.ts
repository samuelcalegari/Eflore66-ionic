import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  constructor(public navCtrl: NavController) {

  }

  searchFlower(event, key) {
    if(event.target.value.length > 2) {
      console.log(event.target.value);
    }
  }


}
