import {getApp, getApps, initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKUBEg-MDfVjWS-tZG4EBBNO5-zRM8JkU",
  authDomain: "digital-center-bot.firebaseapp.com",
  projectId: "digital-center-bot",
  storageBucket: "digital-center-bot.appspot.com",
  messagingSenderId: "210876394928",
  appId: "1:210876394928:web:c2296a6d2beef0c22eba75",
  measurementId: "G-KLYZLG1FSF"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const database = getFirestore(app);

export {database};