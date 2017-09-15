import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SummaryDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summary-detail',
  templateUrl: 'summary-detail.html',
})
export class SummaryDetailPage {

  page_data: any;
  compare_bullet_data: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('inside detail', navParams);
    if(Object.prototype.toString.call(navParams.data) === '[object Array]'){
      this.page_data = navParams.data[0];
      this.compare_bullet_data = this.page_data['compareBullet'];
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummaryDetailPage');
  }

}
