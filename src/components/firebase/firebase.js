import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyB08VFI6pea6sL4ngiRiplbQpEd389yyy8',
  authDomain: 'ecomtoso-tosoroni.firebaseapp.com',
  projectId: 'ecomtoso-tosoroni',
  storageBucket: 'ecomtoso-tosoroni.appspot.com',
  messagingSenderId: '886283598397',
  appId: '1:886283598397:web:c5f09a3fe000d49d840854',
  measurementId: 'G-ZC30MY54S1',
};

const fb = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
  return fb.firestore();
};
