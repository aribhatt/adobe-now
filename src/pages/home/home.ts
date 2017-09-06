import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {

  cards: any[] = [];

  constructor(public navCtrl: NavController, public dataProvider: DataProvider) {
    this.populateHomeCards();

  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.dataProvider);
    console.log('This component is ', this);
    


  }

  populateHomeCards() {
    let self = this;
    this.dataProvider.getHomeCardObservable().subscribe(
      (data: any[]) => {
        console.log(data);
        self.cards = data;
      },
      (err) => {

      }
    );
  }
}
