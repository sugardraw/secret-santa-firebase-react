import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBgX0Q-xvbcKdSvCzPCMct0VAJtzUKaTpg",
  authDomain: "secret-santa-dci.firebaseapp.com",
  databaseURL: "https://secret-santa-dci.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;