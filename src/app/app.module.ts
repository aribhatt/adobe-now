import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { UtilsProvider } from '../providers/utils/utils';
import { NotificationProvider } from '../providers/notification/notification';
import { C3ServiceProvider } from '../providers/c3-service/c3-service';
import { HttpModule } from '@angular/http';

import { HomePageModule } from '../pages/home/home.module';
//import { AboutPageModule } from '../pages/about/about.module';
import { ChannelDetailPageModule } from '../pages/channel-detail/channel-detail.module';
import { LoginPageModule } from '../pages/login/login.module';
import { NotificationPageModule } from '../pages/notification/notification.module';
import { SummaryDetailPageModule } from '../pages/summary-detail/summary-detail.module';

@NgModule({
  declarations: [
    MyApp,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    //AboutPageModule,
    ChannelDetailPageModule,
    LoginPageModule,
    NotificationPageModule,
    SummaryDetailPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    UtilsProvider,
    NotificationProvider,
    C3ServiceProvider
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
