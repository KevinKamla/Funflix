import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import YouTubePlayer from 'youtube-player'
import { StreamingMedia, StreamingVideoOptions } from '@awesome-cordova-plugins/streaming-media/ngx';


@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {

  player: any;
  videoId: string = ""
  idDiv: string = "play"
  stopped: boolean = true
  linkVideo: string
  displayButtons: string = "d-none"
  currentVideo: any;
  slideVideo: boolean = true;

  constructor(
    private modale: ModalController,
    private streamingMedia: StreamingMedia,
  ) { }

  // playStreaming() {
  //   let options: StreamingVideoOptions = {
  //     successCallback: () => { console.log('Video played') },
  //     errorCallback: (e) => { console.log('Error streaming') },
  //     orientation: 'portrait',
  //     shouldAutoClose: true,
  //     controls: true
  //   };
  //   this.streamingMedia.playVideo('http://static.videogular.com/assets/videos/elephants-dream.mp4', options);
  // }



  closeModal() {
    this.modale.dismiss();
  }
  playYoutube(link: any) {
    if (this.stopped) {
      if (this.player == undefined) {
        this.player = YouTubePlayer("idVid");
      }
      this.player.loadVideoById(link).then(() => {
        this.player.playVideo();
        this.stopped = false;
      })
    }
  }

  stopYoutube() {
    if (!this.stopped) {
      this.player.stopVideo().then(() => {
        this.stopped = true;
      })
    }
  }



  ngOnInit() {
    this.linkVideo = localStorage.getItem('linkVideo')
    this.currentVideo = JSON.parse(localStorage.getItem('video'))
    if (this.currentVideo.Init == "init") {
      console.log("currentVideo.Init == init");
      // this.slideVideo = true
      // this.playStreaming();
      this.playYoutube(this.currentVideo.play)
    } else {
      console.log("currentVideo.Init !!== Init ");
      this.playYoutube(this.linkVideo)
    }
    const setI = setInterval(() => {
      if (this.stopped == true) {
        this.displayButtons = "d-none"
      } else {
        this.displayButtons = "d-bloc"
        clearInterval(setI)
      }
    }, 100)
  }

}
