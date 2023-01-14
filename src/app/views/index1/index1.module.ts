import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Index1PageRoutingModule } from './index1-routing.module';

import { Index1Page } from './index1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Index1PageRoutingModule
  ],
  declarations: [Index1Page]
})
export class Index1PageModule {}
