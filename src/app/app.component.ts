import { Component, OnInit } from '@angular/core';
import { Network, ConnectionStatus } from '@capacitor/network';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { BdFilmService } from './services/bd-film.service';

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
  ) { }

  async checkNetwork() {
    this.networkStatus = await Network.getStatus();
    console.log("this.networkStatus : ", this.networkStatus);
  }

  async NetworkTrue() {
    const alerte = await this.alert.create({
      header: 'Network',
      subHeader: 'Verification',
      message: 'Connection restored!',
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

  async NetworkFalse() {
    const alerte = await this.alert.create({
      header: 'Network',
      subHeader: 'Verification',
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


  ngOnInit() {

    this.serviceBD.initDataBase();
    this.checkNetwork();
    Network.addListener("networkStatusChange", status => {
      this.networkStatus = status
      if (!this.networkStatus.connected) this.NetworkFalse()
      console.log("this.networkStatus : ", this.networkStatus);
    })
  }

};


