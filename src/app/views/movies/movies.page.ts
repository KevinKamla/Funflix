import { Component, OnInit } from '@angular/core';
import { HomePage } from 'src/app/home/home.page';
import { BdFilmService } from 'src/app/services/bd-film.service';
import { FilmServiceService } from 'src/app/services/film-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  tabFilmAll: any[] =[];
  tabVideoHorror: any[] = [];



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
      if (genre[0] == "Horror") {
        this.tabVideoHorror.push(element)
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