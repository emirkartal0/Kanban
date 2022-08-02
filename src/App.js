import {  onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./Firebase";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, authUser => {
      if(authUser){
        setUser(authUser)
      } else {
        setUser(null)
      }
    })
  },[])
  
  return (
    <>
      { 
        user ? <Home user={user} /> : <Login />
      }
    </>
  );
}

export default App;
