import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { C3ServiceProvider, C3, D3 } from '../../providers/c3-service/c3-service';

/**
 * Generated class for the GraphDonutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'donut',
  templateUrl: 'graph-donut.html',
})
export class GraphDonutPage {
  private c3: C3;
  private d3: D3;
  donutDataArray: any[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraphDonutPage');
  }
  donutChart() {
    this.c3.generate({
      bindto: "#donutChart",
      data: {
        type: 'donut',
        columns: this.donutDataArray,
      },
      legend: {
        show: false
      },
      size: {
        // height: this.donutPerentHeight
        height: 170
      },
      donut: {
        width: 15
      }
    });
  }
}
