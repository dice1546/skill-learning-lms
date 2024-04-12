import {getApp, getApps, initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // Add the credentials below given by firebase when you regsiter your project
  apiKey: "", 
  authDomain: "", 
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const database = getFirestore(app);

export {database};
