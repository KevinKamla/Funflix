import { Component, OnInit } from '@angular/core';
import { HomePage } from 'src/app/home/home.page';
import { FilmServiceService } from 'src/app/services/film-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  display_skeleton: string = "dp-none";
  resultSearchYoutube: any
  resultSearchYoutubeTab: any[] = []
  resultSearchOmdbApi: any
  videoFriend: any[] = []
  annees: any[] = ["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000"]


  constructor(
    private serviseFilm: FilmServiceService,
    private homeTs:HomePage
    ) { }

  onSearchChange(e: any) {
    this.display_skeleton = "dp-bloc";
    if (e.target.value == "") {
      this.display_skeleton = "dp-none";
      this.resultSearchYoutubeTab = [];
      this.videoFriend = [];
    } else {
      let val = e.target.value; //on récupère la saisie de l’utilisateur
      this.serviseFilm.getVideoYoutube(val).subscribe((res: any) => {
        this.resultSearchYoutube = res
        this.resultSearchYoutubeTab = this.resultSearchYoutube.items
        console.log("resultSearchYoutubeTab : ", this.resultSearchYoutubeTab);

      })

      this.serviseFilm.getFilm(val,"").subscribe((res: any) => {
        this.resultSearchOmdbApi = res
        this.videoFriend.push(this.resultSearchOmdbApi)
        this.annees.forEach((item) => {
          this.serviseFilm.getFilm(this.resultSearchOmdbApi.Title, item).subscribe((res: any) => {
            if (res.Response === "True") { this.videoFriend.push(res) }
          })
        })
        this.videoFriend = this.videoFriend.filter((x:{Title:any}) => x.Title == val)
        console.log("videoFriend : ", this.videoFriend);
      })
    }
  }

  openModalDetail(item: any) {
    this.homeTs.openModalDetail(item)
  }


  ngOnInit() {
  }

}
