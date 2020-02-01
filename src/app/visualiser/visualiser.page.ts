import { Component, OnInit, Injectable } from '@angular/core';
import { Platform, NavController, AlertController } from '@ionic/angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../firebase';
import { FirebaseListObservable } from "@angular/fire/database-deprecated"
import { UserService } from "../user.service";
import { Router } from '@angular/router';


declare var google;
@Component({
  selector: 'app-visualiser',
  templateUrl: './visualiser.page.html',
  styleUrls: ['./visualiser.page.scss'],
})
export class VisualiserPage implements OnInit {
  
  currentDate;
  formatedDate;
 lampe: FirebaseListObservable<any[]>;
  items = [];
  ref = firebase.database().ref('items/');
  inputText:string = ''
  itemsF = [];
  refF = firebase.database().ref('itemsF/');
  inputTextF:string = ''
  itemsM = [];
  refM = firebase.database().ref('itemsM/');
  inputTextM:string = ''

  constructor(public platform:Platform, 
    public navCtrl: NavController,
    private alertCtrl:AlertController,
    public fbse:UserService, private route : Router){
//      this.lampe = this.fbse.getQuantite();
      this.ref.on('value', resp =>{
     this.items = snapshotToArray(resp)
   })
   this.refF.on('value', respo =>{
    this.itemsF = snapshotToArray(respo)
  })
  this.refM.on('value', respa =>{
    this.itemsM = snapshotToArray(respa)
  })
 this.currentDate = new Date();
   }

//----------------------------Lampe--------------------------------------
addItem(item: any){
  if(item!==undefined && item!==null){
  let newItem = this.ref.push();
  newItem.set(item);
  this.inputText = '';
 }
}

//firebase items ON/OFF
async onState(){
  let alert = this.alertCtrl.create({
    header: 'Confirmez-vous d\'allumer cette lampe ?',
    message: 'Savez-vous que cela augmentera vos couts d\'électricité',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Canceled');
        }
      },
      {
        text: 'On',
        handler: () => {
            firebase.database().ref('items/-LyB_aRQ7eHWpmFoBhQa/etat/').set('on');
          //faire la fonction qui va presenter l'image ici 
        }
      }
    ]
  });
  await (await alert).present()
}
//-------------fonction pour eteindre la lampe---------------

async offState(){
  let alert = this.alertCtrl.create({
    header: 'Confirmez-vous d\'éteindre cette charge ?',
    message: 'Cela vous permettra de reduire vos couts d\'électricité',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Canceled');
        }
      },
      {
        text:'Off',
        handler: () => {
            firebase.database().ref('items/-LyB_aRQ7eHWpmFoBhQa/etat/').set('off');
          //faire la fonction qui va presenter l'image ici 
        }
      }
    ]
  });
  await (await alert).present()
}
//------------------------Pour F-------------------------------------------
addItemF(item: any){
  if(item!==undefined && item!==null){
  let newItem = this.refF.push();
  newItem.set(item);
  this.inputTextF = '';
 }
}

//firebase itemsF ON/OFF
async onStateF(){
  let alert = this.alertCtrl.create({
    header: 'Confirmez-vous d\'allumer cette lampe ?',
    message: 'Savez-vous que cela augmentera vos couts d\'électricité',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Canceled');
        }
      },
      {
        text: 'On',
        handler: () => {
            firebase.database().ref('itemsF/-Ly1gdSGfA9TtQ31DbI5/etat/').set('on');
          //faire la fonction qui va presenter l'image ici 
        }
      }
    ]
  });
  await (await alert).present()
}
//-------------fonction pour eteindre la lampe---------------

async offStateF(){
  let alert = this.alertCtrl.create({
    header: 'Confirmez-vous d\'éteindre cette charge ?',
    message: 'Cela vous permettra de reduire vos couts d\'électricité',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Canceled');
        }
      },
      {
        text:'Off',
        handler: () => {
            firebase.database().ref('itemsF/-Ly1gdSGfA9TtQ31DbI5/etat/').set('off');
          //faire la fonction qui va presenter l'image ici 
        }
      }
    ]
  });
  await (await alert).present()
}

//-------------------pour M-------------------------------------
addItemM(item: any){
  if(item!==undefined && item!==null){
  let newItem = this.refM.push();
  newItem.set(item);
  this.inputTextM = '';
 }
}

//firebase itemsM ON/OFF
 async onStateM(){
  let alert = this.alertCtrl.create({
    header: 'Confirmez-vous d\'allumer cette lampe ?',
    message: 'Savez-vous que cela augmentera vos couts d\'électricité',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Canceled');
        }
      },
      {
        text: 'On',
        handler: () => {
            firebase.database().ref('itemsM/-Ly1mpk64j5rDrV3Qv7A/etat/').set('on');
          //faire la fonction qui va presenter l'image ici 
        }
      }
    ]
  });
  await (await alert).present()
}
//-------------fonction pour eteindre la lampe---------------

async offStateM(){
  let alert = this.alertCtrl.create({
    header: 'Confirmez-vous d\'éteindre cette charge ?',
    message: 'Cela vous permettra de reduire vos couts d\'électricité',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Canceled');
        }
      },
      {
        text:'Off',
        handler: () => {
            firebase.database().ref('itemsM/-Ly1mpk64j5rDrV3Qv7A/etat/').set('off');
          //faire la fonction qui va presenter l'image ici 
        }
      }
    ]
  });
  await (await alert).present()
}

ngOnInit() {
  }
getFormatDate(){
  var date = new Date();
  var y = date.getFullYear().toString();
  var m = date.getMonth().toString();
  var d = date.getDate().toString();
  this.formatedDate = y +":"+m+":"+d;
}
  
showChart(){
   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows([
     ['Mushrooms', 3],
     ['Onions', 1],
     ['Olives', 1],
     ['Zucchini', 1],
     ['Pepperoni', 2]
   ]);

   // Set chart options
   var options = {'title':'Au cours des cinq derniers jours',
                  'width':400,
                  'height':300};

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
   chart.draw(data, options);
}

goToChart(){
  this.route.navigate(['/historique']);
}


}
