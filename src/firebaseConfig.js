import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHMFm5Bx7w_DJn-9vfilq3Eyg6WKypWJc",
  authDomain: "hisar-message-30bb1.firebaseapp.com",
  projectId: "hisar-message-30bb1",
  storageBucket: "1:753165124188:web:cd87ffdb489caea142dc99",
  messagingSenderId: "hisar-message-30bb1.appspot.com",
  appId: "753165124188",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
