import * as firebase from 'firebase/app';

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
export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();
