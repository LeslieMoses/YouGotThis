import Rebase from 're-base';
import firebase from "firebase";

var config = {
    apiKey: "AIzaSyDCWbrkcN-685RdoPHM4dC-PEEPzSx0Ijk",
    authDomain: "you-got-this.firebaseapp.com",
    databaseURL: "https://you-got-this.firebaseio.com",
    projectId: "you-got-this",
    storageBucket: "you-got-this.appspot.com",
    messagingSenderId: "536841211014"
  };
  var app = firebase.initializeApp(config);

export var base = Rebase.createClass(app.database());

