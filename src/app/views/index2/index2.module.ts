import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Index2PageRoutingModule } from './index2-routing.module';

import { Index2Page } from './index2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Index2PageRoutingModule
  ],
  declarations: [Index2Page]
})
export class Index2PageModule {}
