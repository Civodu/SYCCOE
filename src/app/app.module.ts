import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebaseConfiguration from './firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database-deprecated';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserService } from './user.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpModule } from '@angular/http';
import { ShareModule } from './share.module';
import { AuthService } from './auth.service';
import { HomePageModule } from './home/home.module';
import {File} from '@ionic-native/file/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx';
//import {FileChooser} from '@ionic-native/file-chooser/ngx';
//import {FilePath} from '@ionic-native/;
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfiguration),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpModule,
    ShareModule,
    HomePageModule,
    AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy,useClass: IonicRouteStrategy },
    UserService,
    AuthService,
    File,
    FileOpener,
    //FilePath,
    //FileChooser
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
