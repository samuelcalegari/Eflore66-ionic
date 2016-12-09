import { Component } from '@angular/core';
import { PostDetail } from '../post-detail/post-detail';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  url: string = 'http://eflore66.fr/wp-json/wp/v2/fleur?http://eflore66.fr/wp-json/wp/v2/fleur?orderby=title&order=asc&search=';
  isBusy : boolean = false;
  items: any;

  constructor(public navCtrl: NavController, private http: Http, private nav: NavController ) {

  }

  searchFlower(event, key) {

    if(event.target.value.length > 2) {

      this.isBusy = true;

      this.http.get( this.url + event.target.value )
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.items = data;
          this.isBusy = false;
        });

    } else {
      this.items = null;
    }
  }

  itemTapped(event, item) {

    this.nav.push(PostDetail, {
      item: item
    });
  }



}
