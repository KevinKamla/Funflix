import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilmServiceService } from '../services/film-service.service';
import { VideoDetailPage } from '../views/video-detail/video-detail.page';
import { BdFilmService } from 'src/app/services/bd-film.service';
import { Network, ConnectionStatus } from '@capacitor/network';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
// import { Plugins, PluginListenerHandle } from '@capacitor/core';

// const {Network} = Plugins 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  networkStatus: ConnectionStatus;
  init: number = 1;
  tabFilm: any[] = []
  tabFilmAll: any[] = []
  tabTitre: any[] = []
  tabVideoSlide: any[] = []
  tabVideoAction: any[] = []
  tabVideoActionAll: any[] = [];
  i: any = 1;
  // networkListener: PluginListenerHandle

  constructor(
    private service: FilmServiceService,
    private modal: ModalController,
    private serviceBD: BdFilmService
  ) { }


  async checkNetwork() {
    this.networkStatus = await Network.getStatus();
    console.log("this.networkStatus in home : ", this.networkStatus);
  }

  async openModalDetail(video: any) {
    const modale = await this.modal.create({
      component: VideoDetailPage
    });
    localStorage.setItem('video', JSON.stringify(video))
    await modale.present();
  }

  swipper = {
    slidesPerView: 1.3,
    centeredSlides: true,
    loop: true,
    spaceBetween: -20,
    autoplay: true,
    time: 200
  }


  // setI = setInterval(() => {
  //   if (this.init <= 1000) {
  //     console.log("tab tabVideoSlide : ", this.tabVideoSlide);
  //     this.init +=1 
  //   } else clearInterval(this.setI)
  // }, 1)



  ngOnInit() {

    this.service.getTitre().subscribe((res: any) => {
      this.tabTitre = res
      console.log("liste  des titre :", this.tabTitre);
      this.tabVideoSlide = [this.tabTitre[7], this.tabTitre[16], this.tabTitre[23], this.tabTitre[28]]
      console.log(" tabslide : ", this.tabVideoSlide);
      this.service.getTitre().subscribe((res: any) => {
        this.tabTitre.forEach((item: any) => {
          this.service.getFilm(item.nom, "").subscribe((res: any) => {
            this.tabFilmAll.push(res)
            this.serviceBD.setData("liste-fims", res)
          });
        });
        for (let i = 0; i < 10; i++) {
          this.tabFilm.push(this.tabFilmAll[i])
        }
        this.tabFilmAll.forEach(element => {
          let genre = element.Genre.split(',')
          if (genre[0] == "Action") {
            this.tabVideoActionAll.push(element)
          }
        });
        for (let i = 0; i < 10; i++) {
          this.tabVideoAction.push(this.tabVideoActionAll[i])
        }
        console.log("tab film Action: ", this.tabVideoAction);
      })
    })

    Network.addListener("networkStatusChange", (status: any) => {
      this.networkStatus = status
      console.log("networkStatusChange in home : ", this.networkStatus);
    })

    this.checkNetwork();

  }
}