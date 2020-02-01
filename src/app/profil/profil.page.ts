import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  userPosts
  //connexion du user a firebase
  constructor(private afs: AngularFirestore, private user: UserService) {
   const posts =afs.doc(`dbalamba/${user.getUID()}`)
   this.userPosts = posts.valueChanges()
   }

  ngOnInit() {
  }

}
