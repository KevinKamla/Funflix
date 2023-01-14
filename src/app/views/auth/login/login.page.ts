import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: any;
  password: any;

  constructor(private navCtrl: NavController, private router: Router, private auth: AngularFireAuth) { }

  gotoRegister() {
    this.navCtrl.navigateForward('register');
  }


  log() {

    this.email = ((document.getElementById("email") as HTMLInputElement).value);
    this.password = ((document.getElementById("password") as HTMLInputElement).value);


    this.auth.
      signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {

        if (userCredential.user) {
          console.log("================== Seccess ============= : utilisateur connecté");
          localStorage.setItem("isUserCreate","true")
          this.router.navigateByUrl('tabs');

        }

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("========= erreur =========== :", errorMessage);
        // ..
      });


  }

  move() {
    this.navCtrl.navigateForward('reset');

  }


  ngOnInit() {
    
  }


}
