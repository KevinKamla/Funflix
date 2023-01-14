import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-index2',
  templateUrl: './index2.page.html',
  styleUrls: ['./index2.page.scss'],
})
export class Index2Page implements OnInit {

  constructor(
    private navCtrl: NavController,
    private modal: ModalController,
    ) { }

  
  gotosingIn() {
    this.navCtrl.navigateForward('');
    this.modal.dismiss();
  }

  ngOnInit() {
  }

}
