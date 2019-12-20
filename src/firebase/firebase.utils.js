import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD5nO3LcPCtyoKXTmhTajhAgEkavHLCUps',
	authDomain: 'cloth-store-3c30b.firebaseapp.com',
	databaseURL: 'https://cloth-store-3c30b.firebaseio.com',
	projectId: 'cloth-store-3c30b',
	storageBucket: 'cloth-store-3c30b.appspot.com',
	messagingSenderId: '668764454230',
	appId: '1:668764454230:web:99794a1f28ef5879af6af7',
	measurementId: 'G-V3C47G1VYT'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// TODO: some error with popup, i just keep moving and comeback to this problem later
provider.addScope('profile');
provider.addScope('email');
provider.setCustomParameters({ display: 'popup' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

// last one 85
