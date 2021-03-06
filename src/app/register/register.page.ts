import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""
  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public afstore: AngularFirestore,
    public user: UserService,
    public alertController: AlertController
    ) { }

  ngOnInit() {
  }
  //creation d'une alerte
  async presentAlert(title: string, content: string){
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    })
    await alert.present()
  }

  async register(){
    const { username, password, cpassword } = this
    if(password !== cpassword){
      this.showAlert("Oups","Le mot de passe doit etre identique!")
      return console.error("Passwords don't match")
    }
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username +  '@alamba.com',password)
      //on cree un document unique a la creation d'un utilisateur 
      this.afstore.doc(`dbalamba/${res.user.uid}`).set({
        username
      })
      this.user.setUser({
        username,
        uid: res.user.uid
      })
     // this.presentAlert("Bien, ","Compte creer avec succes!")
      this.showAlert("Bien, ","Compte creer avec succes!")
      this.router.navigate(['/tabs'])
    }catch(error){
      console.dir(error)
      if(error.code === "auth/weak-password"){
        this.showAlert("Oups!","Le mot de passe doit contenir au moins 6 caracteres")
      }
      else if(error.code === "auth/invalid-email"){
        this.showAlert("Eh!","Cette adresse email n'est pas valide!\n Entrez le bon format")
      }
    //  this.showAlert("Oups", error.message)
    }
  }
 
/**/  async showAlert(header: string, message: string)
  {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Ok"] 

    })
    await alert.present()
  }
 
}
