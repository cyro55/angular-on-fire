import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthService } from './auth.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyD7eNl5ex9hPVttpyWZmtj_WD0Iw0ZsZ3U",
        authDomain: "angularlist-c73a7.firebaseapp.com",
        projectId: "angularlist-c73a7",
        storageBucket: "angularlist-c73a7.appspot.com",
        messagingSenderId: "1022061440709",
        appId: "1:1022061440709:web:8190b7831ec2162c240aac"
      }
    ),
    AngularFireAuthModule
  ],
  declarations: [ AppComponent, HelloComponent],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }