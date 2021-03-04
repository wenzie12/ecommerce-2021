import firebase from 'firebase/app';
//we use firebase/app instead of firebase only because we don't need other firebase lib.
import 'firebase/firestore';
import 'firebase/auth';

// Note: I'll add this to commit so you can test the api for signing in and signing up, after exam, i'll be deleting this in my repo and store it in an .env file
const config = {
	apiKey: "AIzaSyB2gVDKPUheziH0ZMANm0fyWhr7tPsEADk", 
	authDomain: "crwn-db-2e8fd.firebaseapp.com",
	databaseURL: "https://crwn-db-2e8fd.firebaseio.com", // used my old db so i don't have to create a new one.
	projectId: "crwn-db-2e8fd",
	storageBucket: "",
	messagingSenderId: "191898409514",
	appId: "1:191898409514:web:db90fcb9cfc86d2c"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return; //if the user does not exist, exit this function

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	//create user in database/firestore
	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		//if snapShot doesn't exist, then create data(user data) in firestore
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 