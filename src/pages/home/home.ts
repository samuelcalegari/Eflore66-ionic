import { Component } from '@angular/core';
import {PostDetail} from '../post-detail/post-detail';
import { NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

	url: string = 'http://eflore66.fr/wp-json/wp/v2/fleur?orderby=title&order=asc&filter[posts_per_page]=10';
  isBusy : boolean = true;
	items: any;

	constructor(public navCtrl: NavController, private http: Http, private nav: NavController ) {
	}

	ionViewDidEnter() {

		this.http.get( this.url )
	    .map(res => res.json())
	    .subscribe(data => {
	      // we've got back the raw data, now generate the core schedule data
	      // and save the data for later reference
	      this.items = data;
        this.isBusy = false;
	    });
	}

	itemTapped(event, item) {

		this.nav.push(PostDetail, {
		  item: item
		});
	}
}
