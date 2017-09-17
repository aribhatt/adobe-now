import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NotificationPage } from '../pages/notification/notification';
import { AboutPage } from '../pages/about/about';
import { SummaryDetailPage } from '../pages/summary-detail/summary-detail';
import { ChannelDetailPage } from '../pages/channel-detail/channel-detail';
import { DataProvider } from '../providers/data/data';
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;
  navMenu: any[] = [];


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public dataProvider: DataProvider) {
    this.initializeApp();
    let self = this;

    this.dataProvider.getNavBarDataObservable().subscribe(
      (data: any[]) => {
        //console.log(data);
        self.navMenu = data;
      },
      (err) => {

      }
    );
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataProvider.setRequestUrl('../assets/json/data.json');
    this.dataProvider.fetchData();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page && page.title !== 'Home') {
      let component: any = {};
      switch (page['type']) {
        case 'channels':
          component = ChannelDetailPage;
          break;
        case 'summary':
          component = SummaryDetailPage;
          break;
        case 'login':
          component = LoginPage;
          break;
        case 'notification':
          component = NotificationPage;
          break;
      }
      this.nav.push(component, page.payload);
    }
  }
}
