import React, {useState} from "react";
import './App.css';
import db from "./data";
import { doc, setDoc, getDoc } from "firebase/firestore"; 


function App() {
  const [visits, setVisits] = useState(null)
  
  window.onload = async () => {
    const docRef = doc(db, "visits", "id-visits");
    const docSnap = await getDoc(docRef);
    const count = docSnap.data().total + 1
    await setDoc(doc(db, "visits", "id-visits"), {
      total: count
    });
    console.log(count)
    setVisits(count)
  } 
  
  return (
    <div className="App">
        <h1>All visits {visits}</h1>
    </div>
  );
}

export default App;
