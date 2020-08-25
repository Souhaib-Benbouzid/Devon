import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCFDPxPUVsE-U18ab8VWpCkYCNWh30YWzo',
  authDomain: 'admin-djihan.firebaseapp.com',
  databaseURL: 'https://admin-djihan.firebaseio.com',
  projectId: 'admin-djihan',
  storageBucket: 'admin-djihan.appspot.com',
  messagingSenderId: '523408276903',
  appId: '1:523408276903:web:732b1d1a6c54cfbe5c8a82',
  measurementId: 'G-BTV435MYL0',
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}

export default new Firebase();
