import firebase from "firebase/compat";
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDnvLJSO02P_bXwGFtSakOAUN72GDWjNfg",
    authDomain: "worldskitchenstorage.firebaseapp.com",
    projectId: "worldskitchenstorage",
    storageBucket: "worldskitchenstorage.appspot.com",
    messagingSenderId: "725177988988",
    appId: "1:725177988988:web:1ae2fb25b6feca0a8256f9"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export {firebase}