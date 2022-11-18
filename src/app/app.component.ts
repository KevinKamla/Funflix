import { Component } from '@angular/core';
import { Network } from '@awesome-cordova-plugins/network/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  //public disconnectSubscription : any  ;
  //public connectSubscription : any;

  constructor(private network:Network) {}

   //this.disconnectSubscription = 
   public disconnectSubscription = this.network.onDisconnect().subscribe( () => {
    console.log("network was disconnected :-(");
  }).unsubscribe();

  //this.connectSubscription = 
  public connectSubscription = this.network.onDisconnect().subscribe( () => {
    console.log("network was connected :-(");
  }).unsubscribe();

};


