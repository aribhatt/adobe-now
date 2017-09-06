import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SummaryCard } from './models/summary-card.model';
import { ChannelCard } from './models/channel-card.model';
import { Subject } from 'rxjs/Subject';

import { SummaryDetailPage } from '../../pages/summary-detail/summary-detail';
import { ChannelDetailPage } from '../../pages/channel-detail/channel-detail';
import { HomePage } from '../../pages/home/home';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {
  homeCards: any[] = [];
  homeCardsSubject: Subject<any[]> = new Subject<any[]>();
  navBarData: any[] = [];
  navBarDataSubject: Subject<any[]> = new Subject<any[]>();

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  fetchData(url: string) {
    let self = this;
    this.http.get(url).subscribe(
      (data) => { self.parseData(data.json()) },
      (err) => { }
    );
  }

  parseData(json: any) {
    if (json && json['cards']) {
      this.homeCards = [];
      this.navBarData = [];
      let cards: any[] = json['cards'];


      this.navBarData.push({ 'title': 'Home', 'component': HomePage });
      cards.forEach((item) => {
        if (item['template'] === 'channels') {
          let card = this.processChannelCard(item['name'], item['collection']);
          this.homeCards.push(card);
          let nav_item = {};
          nav_item['title'] = item['name'];
          nav_item['component'] = SummaryDetailPage;
          this.navBarData.push(nav_item);
        } else if (item['template'] === 'summary' || item['template'] === 'conversion') {
          let card = this.processSummaryCard(item['template'], item['name'], item['collection']);
          this.homeCards.push(card);
          let nav_item = {};
          nav_item['title'] = item['name'];
          nav_item['component'] = SummaryDetailPage;
          this.navBarData.push(nav_item);
        }
      });
      this.homeCardsSubject.next(this.homeCards);
      this.navBarDataSubject.next(this.navBarData);
    }
  }


  processSummaryCard(type: string, name: string, colletion: any[]) {
    let today: any = {};
    let lweek: any = {};
    let barLineData: any = {};
    colletion.forEach((item, index) => {
      if (index === 0) {//Today
        let count = 0;
        let vars = [];
        let vals = [];
        for (let e in item['data']) {
          let objs = Object.keys(item['data'][e]);
          if (objs.length === 1) {
            if (count === 0) {
              vars.push('Today');
            } else {
              vars.push(e);
            }

            let temp = item['data'][e][objs[0]];
            if (isNaN(temp)) {
              temp = parseFloat(temp);
            }
            vals.push([temp]);
          }
          count++;
        }
        today['vars'] = vars;
        today['vals'] = vals;
      } else if (index === 1) {//Last week
        let count = 0;
        let vars = [];
        let vals = [];
        for (let e in item['data']) {
          let objs = Object.keys(item['data'][e]);
          if (objs.length === 1) {
            if (count === 0) {
              vars.push('Last Week');
            } else {
              vars.push(e);
            }
            //lweek[e] = item['data'][e][objs[0]];
            let temp = item['data'][e][objs[0]];
            if (isNaN(temp)) {
              temp = parseFloat(temp);
            }
            vals.push([temp]);
          }
          count++;
        }
        lweek['vars'] = vars;
        lweek['vals'] = vals;
      } else if (index === 2) {//Daily trends
        let count = 0;
        for (let e in item['data']) {
          count++;
          if (count <= 2) {
            let keys = Object.keys(item['data'][e]);
            let arr: any[] = [];
            keys.forEach((k) => {
              arr.push(item['data'][e][k]);
            });

            barLineData[count === 1 ? 'bar' : 'line'] = arr;
            if (typeof barLineData['labels'] === 'undefined') {
              barLineData['labels'] = keys;
            }
          }
        }
      }

    });
    return new SummaryCard(type, name, lweek, today, barLineData);
  }

  processSummaryPage(type, detail_trends: any[]) {
    let lweekBullet: any = {}
    let todayBullet: any = {};
    let lineChart: any = {};

    if (Object.prototype.toString.call(detail_trends) === '[object Array]') {
      detail_trends.forEach((item, index) => {
        if (index === 0) {

        } else if (index === 1) {

        } else if (index === 2) {

        }
      });
    }

  }

  processChannelCard(name: string, collection: any[]) {
    let bullets: any = {};
    let donut: any = {};

    if (Object.prototype.toString.call(collection) === '[object Array]') {
      collection.forEach((item, index) => {

        let data: any = item['data'];
        if (data) {
          for (let param in data) {
            let day: any[] = Object.keys(data[param]) || [];
            if (data[param][day[0]]) {
              let dataObj: any[] = Object.keys(data[param][day[0]]) || [];
              dataObj.forEach(d => {
                if (index === 0) {
                  donut[d] = data[param][day[0]][d]
                } else if (index === 1) {
                  if (bullets[d]) {
                    bullets[d][param] = [data[param][day[0]][d]];
                  } else {
                    bullets[d] = {};
                    bullets[d][param] = [data[param][day[0]][d]];
                  }
                }
              })
            }
          }
        }

      })

    }
    //console.log(card);
    //return {'bullets': bullets, 'donut': donut};
    return new ChannelCard(name, bullets, donut);;
  }

  processChannelPage() {

  }

  getHomeCardObservable() {
    return this.homeCardsSubject.asObservable();
  }

  getNavBarDataObservable() {
    return this.navBarDataSubject.asObservable();
  }

}
