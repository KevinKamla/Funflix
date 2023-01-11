import { Component, OnInit } from '@angular/core';
import { HomePage } from 'src/app/home/home.page';
import { FilmServiceService } from 'src/app/services/film-service.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {

  constructor(private homeTs: HomePage,
    private service: FilmServiceService,
  ) { }

  tabTitre: any[] = []
  tabFilm: any[] = []
  tabFilmAll: any[] = []

  handleRefresh(event: any) {
    setTimeout(() => {
      this.ngOnInit()
      event.target.complete();
    }, 2000);
  };

  openModalDetail(item) {
    this.homeTs.openModalDetail(item)
  }

  private generateItems() {
      const count = this.tabFilm.length;
      for (let i = 0; i < 10; i++) {
        if (this.tabFilmAll[count + i]) {
          this.tabFilm.push(this.tabFilmAll[count + i]);
        }
      }
      console.log("taille  des films partiel :", this.tabFilm.length);
      console.log("taille  de tout les films :", this.tabFilmAll.length);
  }

  onIonInfinite(e: any) {
    this.generateItems();
    setTimeout(() => {
      (e as InfiniteScrollCustomEvent).target.complete();
    }, 1000);

  }

  ngOnInit() {
    this.service.getTitre().subscribe((res: any) => {
      this.tabTitre = res
      // console.log("liste  des titre :", this.tabTitre);
      this.service.getTitre().subscribe((res: any) => {
        this.tabTitre.forEach((item: any) => {
          this.service.getFilm(item.nom, "").subscribe((res: any) => {
            this.tabFilmAll.push(res)
          });
        });
        console.log("liste  des films partiel :", this.tabFilm);
        console.log("liste  de tout les films :", this.tabFilmAll);
        const setI = setInterval(() => {
          if (this.tabFilmAll.length != 0) {
            this.generateItems();
            clearInterval(setI)
          }
        }, 1000)
      });
    })
  }
}
