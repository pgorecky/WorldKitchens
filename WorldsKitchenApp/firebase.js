import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDnvLJSO02P_bXwGFtSakOAUN72GDWjNfg",
    authDomain: "worldskitchenstorage.firebaseapp.com",
    projectId: "worldskitchenstorage",
    storageBucket: "worldskitchenstorage.appspot.com",
    messagingSenderId: "725177988988",
    appId: "1:725177988988:web:1ae2fb25b6feca0a8256f9"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)