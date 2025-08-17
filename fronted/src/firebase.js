// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set} from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdx6W_MQCyiVH5dtg9p6MqbEWWGemEuPY",
  authDomain: "intership-project-ed2b0.firebaseapp.com",
  databaseURL: "https://intership-project-ed2b0-default-rtdb.firebaseio.com",
  projectId: "intership-project-ed2b0",
  storageBucket: "intership-project-ed2b0.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export database
export const db = getDatabase(app);
export const storage = getStorage(app);
