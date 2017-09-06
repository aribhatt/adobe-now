import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChannelCardPage } from './channel-card';

@NgModule({
  declarations: [
    ChannelCardPage,
  ],
  imports: [
    IonicPageModule.forChild(ChannelCardPage),
  ],
  exports: [ChannelCardPage]
})
export class ChannelCardPageModule {}
