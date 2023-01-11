import { Component, OnInit } from '@angular/core';
import { HomePage } from 'src/app/home/home.page';
import { BdFilmService } from 'src/app/services/bd-film.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.page.html',
  styleUrls: ['./mylist.page.scss'],
})
export class MylistPage implements OnInit {

  tabVidFavorite: any[] = []
  tabVideoAction: any[] = [];

  constructor(private homeTs: HomePage,
    private serviceBD: BdFilmService) { }

  openModalDetail(item) {
    this.homeTs.openModalDetail(item)
  }

  async uploadVideo() {
    this.tabVidFavorite = await this.serviceBD.getData("favorite")
    console.log("tab favorite : ", this.tabVidFavorite);
    this.tabVidFavorite.forEach(element => {
      let genre = element.Genre.split(',')
      if (genre[0] == "Action") {
        this.tabVideoAction.push(element)
      }
    });
    console.log("=============== Action de filtrage de genre : ", this.tabVideoAction);


    // this.tabVideoAction = this.tabVidFavorite.filter((x: { Genre: any }) => {
    //   const genre = x.Genre
    //   console.log("=============== Action de filtrage =============: ");
    //   const g = "Action"
    //   return genre.toLowerCase().indexOf(g.toLowerCase()) > 1;
    // })
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.uploadVideo()
      event.target.complete();
    }, 2000);
  };


  ngOnInit() {
    this.uploadVideo()
  }

}
