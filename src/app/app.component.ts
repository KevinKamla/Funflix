import { Component, OnInit } from '@angular/core';
import { Network, ConnectionStatus } from '@capacitor/network';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { BdFilmService } from './services/bd-film.service';
import { Index1Page } from './views/index1/index1.page';
import { Index2Page } from './views/index2/index2.page';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  networkStatus: ConnectionStatus;
  constructor(
    private serviceBD: BdFilmService,
    private alert: AlertController,
    private modal: ModalController,
    private navCtrl: NavController
  ) { }

  async checkNetwork() {
    this.networkStatus = await Network.getStatus();
    console.log("this.networkStatus : ", this.networkStatus.connected);
    if (this.networkStatus.connected == false) this.NetworkFalse()
  }

  async openIndex(page: any = Index1Page) {
    const modale = await this.modal.create({
      component: page
    });
    await modale.present();
  }

  // async NetworkTrue() {
  //   const alerte = await this.alert.create({
  //     header: 'Network',
  //     subHeader: 'Verification',
  //     message: 'Connection restored!',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => { }
  //       }
  //     ]
  //   });
  //   await alerte.present();
  // }

  async NetworkFalse() {
    const alerte = await this.alert.create({
      header: 'Network',
      message: 'Please check your connection',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    await alerte.present();
  }
  gotosingIn() {
    this.navCtrl.navigateForward('tabs');
  }

  ngOnInit() {
    let isUserCreate = localStorage.getItem("isUserCreate");
    if (isUserCreate == "true") {
      this.gotosingIn()
    } else {
      this.openIndex(Index2Page);
      this.openIndex();
    }
    this.serviceBD.initDataBase();
    this.checkNetwork();
    Network.addListener("networkStatusChange", status => {
      this.networkStatus = status
      if (this.networkStatus.connected == false) this.NetworkFalse()
      console.log("this.networkStatus : ", this.networkStatus);
    })
  }

};


