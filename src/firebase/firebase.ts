import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBVJa3tsuEM-b7ByEwlkBDlWVilaT4BXzQ",
  authDomain: "knowhere-30f99.firebaseapp.com",
  databaseURL: "https://knowhere-30f99.firebaseio.com",
  messagingSenderId: "104519405862",
  projectId: "knowhere-30f99",
  storageBucket: "",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
