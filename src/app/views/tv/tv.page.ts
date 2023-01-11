import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from 'src/app/services/film-service.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { BdFilmService } from 'src/app/services/bd-film.service';
import { HomePage } from 'src/app/home/home.page';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.page.html',
  styleUrls: ['./tv.page.scss'],
})
export class TvPage implements OnInit {
  tabFilmAll: any[] =[];
  tabVideoAction: any[] = [];



  constructor(
    private service: FilmServiceService,
    private serviceBD: BdFilmService,
    private homeTs: HomePage

  ) { }

  openModalDetail(item) {
    this.homeTs.openModalDetail(item)
  }

  async uploadVideo() {
    this.tabFilmAll = await this.serviceBD.getData("favorite")
    console.log("tab favorite : ", this.tabFilmAll);
    this.tabFilmAll.forEach(element => {
      let genre = element.Genre.split(',')
      if (genre[0] == "Action") {
        this.tabVideoAction.push(element)
      }
    });
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.uploadVideo()
      event.target.complete();
    }, 2000);
  };

  ngOnInit() {
    this.uploadVideo();
  }

}
