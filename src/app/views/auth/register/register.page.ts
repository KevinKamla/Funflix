import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
//import * as firebase from 'firebase';
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { BdFilmService } from 'src/app/services/bd-film.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: any;
  email: any;
  password: any;

  users: any = [];

  constructor(private dataService: BdFilmService, private navCtrl: NavController,
    private router: Router,
    private auth: AngularFireAuth
  ) {
    // this.dataService.getUser().subscribe(res => {
    //   console.log(res);
    //   this.users  = res;
    // })
  }


  reg() {

    this.email = ((document.getElementById("email") as HTMLInputElement).value);
    this.password = ((document.getElementById("password") as HTMLInputElement).value);
    console.log(this.email)
    console.log(this.password)

    //   const auth = getAuth();
    this.dataService.getRegister(this.email, this.password)
      .then((userCredential: any) => {

        if (userCredential.user) {
          console.log("================== Seccess ============= : utilisateur crée");
          this.router.navigateByUrl('');

        }

      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("================== Erreur ============= :", errorMessage);
        // window.alert(errorMessage);
        // ..
      });

  }

  gotosingIn() {
    this.navCtrl.navigateForward('');
  }

  ngOnInit() {

  }
}
