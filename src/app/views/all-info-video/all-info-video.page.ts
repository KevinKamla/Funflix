import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-all-info-video',
  templateUrl: './all-info-video.page.html',
  styleUrls: ['./all-info-video.page.scss'],
})
export class AllInfoVideoPage implements OnInit {

  currentVideo:any;
  constructor(private modal: ModalController) { }

  closeModalInfo(){
    this.modal.dismiss();
  }

  ngOnInit() {
    this.currentVideo = JSON.parse(localStorage.getItem('video'))
  }

}
