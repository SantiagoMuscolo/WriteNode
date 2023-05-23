import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
    REACT_APP_APP_ID,
    REACT_APP_DOMAIN,
    REACT_APP_ID,
    REACT_APP_KEY,
    REACT_APP_MEASUREMENT_ID,
    REACT_APP_MESSAGE_SENDER,
    REACT_APP_STORAGE_BUCKET
} from '../../env'

const firebaseConfig = {
    apiKey: REACT_APP_KEY,
    authDomain: REACT_APP_DOMAIN,
    projectId: REACT_APP_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGE_SENDER,
    appId: REACT_APP_APP_ID,
    measurementId: REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);