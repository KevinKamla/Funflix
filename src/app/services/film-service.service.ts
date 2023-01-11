import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  constructor(private http: HttpClient) { }

  getTitre() {

    return this.http.get("assets/jsons/titreFilm.json")
  }
  
  getFilm(titre:any, year:any) {

    return this.http.get(" http://www.omdbapi.com/?apikey=88667bb2&t="+titre+"&y="+year)
  }

  getFilmSecondApikey(titre:any, year:any) {

    return this.http.get(" http://www.omdbapi.com/?apikey=689d5c08&t="+titre+"&y="+year)
  }
  
  
  getVideoYoutube(titre:any) {
    return this.http.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAp3r1P0kkb25VE5Uk93ZTgCP76Lhz4EGQ&type=video&part=snippet&videoDuration=short&rating=rating&q="+titre)
  }

  getLinkVideo(titre:any) {
    let resYoutube:any 
    let link:string
    this.getVideoYoutube(titre).subscribe((res:any) => {
      resYoutube = res
      link = resYoutube.items[0].id.videoId
      console.log("resYoutube : ", link);
      localStorage.removeItem('linkVideo')
      localStorage.setItem('linkVideo', link)  
    })
  }

}
