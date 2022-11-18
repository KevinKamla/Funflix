import { Component } from '@angular/core';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private network: Network,
    private alert: AlertController) { }

   async checkConnection() {
    const alert = this.alert.create({
      header : "Check connection",
      subHeader: "No connected",
      message : "Please config your network and try  again",
      buttons : [
        {
          text: "Ok",
          role: "Cancel"
        }
      ]
    });
     (await alert).present();
    const  role  = (await alert).onDidDismiss();

     this.network.onDisconnect().subscribe(async () => {
      console.log("network was disconnected :-(");

    });

    // disconnectSubscription.unsubscribe();
  }

  swipper = {
    slidesPerView: 1.3,
    centeredSlides: true,
    loop: true,
    spaceBetween: -15,
    autoplay: false,
  }
}
