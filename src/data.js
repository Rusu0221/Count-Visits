import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr76_Y26q1nDqRrVGEBgThHjfHn2CTTf4",
  authDomain: "visits-6ad46.firebaseapp.com",
  projectId: "visits-6ad46",
  storageBucket: "visits-6ad46.appspot.com",
  messagingSenderId: "620797558033",
  appId: "1:620797558033:web:e208c902877ba4b31e20b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;