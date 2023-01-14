import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Index2Page } from '../index2/index2.page';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-index1',
  templateUrl: './index1.page.html',
  styleUrls: ['./index1.page.scss'],
})
export class Index1Page implements OnInit {

  constructor(private navCtrl: NavController,
    private modal: ModalController,
    private app: AppComponent
  ) { }

  handleIndex2() {
    this.modal.dismiss();
  }


  gotosingIn() {
    this.navCtrl.navigateForward('login');
  }

  ngOnInit() {
  }

}
