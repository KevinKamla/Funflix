import { Component, OnInit } from '@angular/core';
//import { threadId } from 'worker_threads';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { BdFilmService } from 'src/app/services/bd-film.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  email: any;
  
  constructor(private dataService: BdFilmService, 
   private router:Router,
   private auth:AngularFireAuth,
   private navCtrl: NavController) { }

  ngOnInit() {
  }

  reset(){

    this.email= ((document.getElementById("email") as HTMLInputElement).value);
     
   console.log(this.email)
   
    
   this.auth.
    sendPasswordResetEmail(this.email)
     .then((userCredential:any) => {
        
       
         window.alert('reset email has been set this email:' +this.email);

     })
      .catch((error:any) => {
       const errorCode = error.code;
      const errorMessage = error.message;
        window.alert(errorMessage);
       // ..
      });
  }

}
