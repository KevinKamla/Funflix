import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { FilmServiceService } from 'src/app/services/film-service.service';
import { BdFilmService } from 'src/app/services/bd-film.service';
import { HomePage } from 'src/app/home/home.page';
import { PlayPage } from '../play/play.page';
import { IonModal } from '@ionic/angular';
import { AllInfoVideoPage } from '../all-info-video/all-info-video.page';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.page.html',
  styleUrls: ['./video-detail.page.scss'],
})


export class VideoDetailPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal | any

  constructor(private modale: ModalController,
    private sevice: FilmServiceService,
    private homeTs: HomePage,
    private serviceBD: BdFilmService,
    private actionSheetController: ActionSheetController
  ) { }

  videoId: any;
  init: number = 1;
  currentVideo: any;
  healt_icon: string = "outline"
  videoFriend: any[] = []
  annees: any[] = ["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000"]
  videoF: boolean = true
  imageBackDefault = "assets/img/funflix.png"
  tabVidFavorite: any[] = []

  async openModalPlay() {
    const modale = await this.modale.create({
      component: PlayPage
    });

    console.log("linkVideo : ", this.videoId);
    await modale.present();
  }

  closeModal() {
    this.modale.dismiss();
  }

  async openModalinfoVideo(){
    const modale = await this.modale.create({
      component: AllInfoVideoPage
    });
    await modale.present();
  }

  // async infoVideo() {
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'Albums',
  //     buttons: [
  //       {
  //         text: 'Delete',
  //         role: 'destructive',
  //         data: {
  //           action: 'delete',
  //         },
  //       },
  //     ]
  //   });
  //   await actionSheet.present();
  // }

  closeModalInfo() {
    this.modal.dismiss();
  }

  openModalDetail(item: any) {
    this.homeTs.openModalDetail(item)
  }

  async whislist() {
    if (await this.serviceBD.isObjectExist("favorite", this.currentVideo) == 1) {
      this.healt_icon = "outline"
      this.serviceBD.removeItem("favorite", this.currentVideo)
    } else {
      this.healt_icon = "sharp"
      this.serviceBD.setData("favorite", this.currentVideo)
    }
  }

  async initializeIconHeart() {
    if (await this.serviceBD.isObjectExist("favorite", this.currentVideo) == 1) {
      this.healt_icon = "sharp"
    }
  }

  ngOnInit() {
    this.currentVideo = JSON.parse(localStorage.getItem('video'))
    console.log(" video courant : ", this.currentVideo);
    this.sevice.getLinkVideo(this.currentVideo.Title)
    this.videoId = localStorage.getItem("linkVideo")
    console.log("videoId : ", this.videoId);
    this.annees.forEach((item) => {
      this.initializeIconHeart()
      this.sevice.getFilmSecondApikey(this.currentVideo.Title, item).subscribe((res: any) => {
        if (res.Response === "True" && res.Plot != 'N/A' && res.Poster != 'N/A') { this.videoFriend.push(res) }
      })
      const setI = setInterval(() => {
        if (this.init <= 5) {
          this.init += 1
        } else {
          this.videoF = false
          clearInterval(setI)
        }
      }, 1000)
      // this.videoFriend.length === 0 ? this.videoF = false : this.videoF = true;
    })
    console.log(" Video frere  : ", this.videoFriend);

  }

}




// export let varGlobale = {
//   isActif: 0,
//   isPlay: 0,
//   son: {
//     id: 1,
//     id_album: 7,
//     titre: "ICB Brutal",
//     pochette: "assets/img/brutal.jpg",
//     path_son: "sounds/icbBrutal.mp3",
//     auteur: '',
//     min: 0,
//     sec: 0,
//     range: 0,
//     duration: 0
//   }
// }