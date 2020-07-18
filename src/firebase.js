import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAHao0ai1lmvhJ3jLDb28qkPeXRMc__PGg",
    authDomain: "instagram-clone-rea.firebaseapp.com",
    databaseURL: "https://instagram-clone-rea.firebaseio.com",
    projectId: "instagram-clone-rea",
    storageBucket: "instagram-clone-rea.appspot.com",
    messagingSenderId: "126478363976",
    appId: "1:126478363976:web:f15739d5c3118a70e5977d"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }