import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { SwiperModule } from 'swiper/angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { StreamingMedia } from '@awesome-cordova-plugins/streaming-media/ngx';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    IonicStorageModule.forRoot({
      name: "MyDataBase",
      driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB]
    }),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    HttpClient,
    AppComponent,
    HomePage,
    StreamingMedia,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
