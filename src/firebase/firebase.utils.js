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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (err) {
				console.log('error creating user', err.message);
		}
	} 
	return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});
	return await batch.commit()
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollections = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
	});

	return transformedCollections.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {})
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// TODO: some error with popup, i just keep moving and comeback to this problem later
// provider.addScope('profile');
// provider.addScope('email');
// provider.setCustomParameters({ display: 'popup' });

export const signInWithGoogle = () => auth.signInWithRedirect(provider);
export default firebase;
