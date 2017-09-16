import { Component, AfterViewInit, ViewChild } from '@angular/core';
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
export class SummaryDetailPage implements AfterViewInit {
  @ViewChild('graphwrapper') wrapper;

  page_data: any;
  page_name: string = '';
  compare_bullet_data: any = {};
  lastweek_bullet: any;
  today_bullet: any;
  label = '';
  margin_top: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('inside detail', navParams);
    if (Object.prototype.toString.call(navParams.data) === '[object Array]') {
      this.page_data = navParams.data[0];
      this.page_name = this.page_data['page_name'];
      this.compare_bullet_data = this.page_data['compareBullet'];
      this.label = this.page_data['labels'][1];
      if (Object.prototype.toString.call(this.compare_bullet_data) === '[object Array]' && this.compare_bullet_data.length === 2) {
        this.lastweek_bullet = this.compare_bullet_data[0]['data'];
        this.today_bullet = this.compare_bullet_data[1]['data'];
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummaryDetailPage');
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.margin_top = -1 * (this.wrapper.nativeElement.offsetWidth - 100);
  }

}
