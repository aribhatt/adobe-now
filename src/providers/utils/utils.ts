import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { C3ServiceProvider, D3, C3 } from '../c3-service/c3-service';
/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
declare var d3: any;
@Injectable()
export class UtilsProvider {
  public kformat = d3.format('.3s');
  private donut_color_map = {
    'paid search': '#d5406a',
    'affiliates': '#0d6580',
    'organic': '#21daa0',
    'display': '#d3885f',
    'others': '#0b94ff'
  }
  constructor(public http: Http) {
    console.log('Hello UtilsProvider Provider');
  }

  getColor(key: string){
    if(key){
      return this.donut_color_map[key.toLowerCase()];
    }
  }

  getKFormatted(num: any){
    if(isNaN(num)){
      return num;
    }
    return this.kformat(num);
  }



}
