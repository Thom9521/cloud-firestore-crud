import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";

import { FormsModule } from "@angular/forms";

var firebaseConfig = {
  apiKey: "AIzaSyA45c5Iig8iqphLytnfgigLU1UWu-O-Bsg",
  authDomain: "firestore-tutorial-36d19.firebaseapp.com",
  databaseURL: "https://firestore-tutorial-36d19.firebaseio.com",
  projectId: "firestore-tutorial-36d19",
  storageBucket: "firestore-tutorial-36d19.appspot.com",
  messagingSenderId: "597448654763",
  appId: "1:597448654763:web:aa838dd2c9783225acdcee",
  measurementId: "G-GX8H2WD5MH"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
