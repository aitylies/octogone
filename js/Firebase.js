export default class Firebase{
    constructor(firebase){
      var config = {
      apiKey: "AIzaSyBCz1omFQKJAmN90A-ir1zTw6bDSSmJ2P0",
      authDomain: "cours-e2b43.firebaseapp.com",
      databaseURL: "https://cours-e2b43.firebaseio.com",
      projectId: "cours-e2b43",
      storageBucket: "cours-e2b43.appspot.com",
      messagingSenderId: "965085374060"
    };
    firebase.initializeApp(config);
  }

}
