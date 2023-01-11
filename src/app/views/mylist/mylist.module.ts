import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MylistPageRoutingModule } from './mylist-routing.module';

import { MylistPage } from './mylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MylistPageRoutingModule
  ],
  declarations: [MylistPage]
})
export class MylistPageModule {}
