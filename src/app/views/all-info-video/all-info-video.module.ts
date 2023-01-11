import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllInfoVideoPageRoutingModule } from './all-info-video-routing.module';

import { AllInfoVideoPage } from './all-info-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllInfoVideoPageRoutingModule
  ],
  declarations: [AllInfoVideoPage]
})
export class AllInfoVideoPageModule {}
