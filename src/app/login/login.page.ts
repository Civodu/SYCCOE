import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string =""
  password: string =""
  constructor(
    public afAuth: AngularFireAuth,
    public user:UserService,
    public router:Router,
    public alert: AlertController){ }

  ngOnInit() {
  }

  async login(){
    const { username, password } = this
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@alamba.com',password)
      if(res.user){
        this.user.setUser({
          username,
          uid: res.user.uid
        })
        this.router.navigate(['/tabs'])
      }
    }catch(err){
      console.dir(err)
      if(err.code === "auth/user-not-found" || err.code === "auth/wrong-password"){
        this.showAlert("Erreur!", "Utilisateur non existant ou mot de passe incorrect")
        console.log("User not found")
      }
      else if(err.code === "auth/invalid-email"){
        this.showAlert("Erreur!", "Ne laissez pas vide les champs!")
        console.log("Email or PassWord not found !")
      }
      else if(err.code === "auth/too-many-requests"){
        this.showAlert("Erreur","La base de donnee ne repond pas");
        console.log("La base de donnees ne repond pas! Veuillez contactez l'admin svp")
      }
    }
  }
  async showAlert(header:string ,message:string){
    const alert = this.alert.create({
      header,
      message,
      buttons:["OK"]
    })
    await (await alert).present()
  }

}
