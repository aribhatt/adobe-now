import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GraphLinePage } from './graph-line';

@NgModule({
  declarations: [
    GraphLinePage,
  ],
  imports: [
    IonicPageModule.forChild(GraphLinePage),
  ],
})
export class GraphLinePageModule {}
