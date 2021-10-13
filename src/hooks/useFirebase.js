import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication()
const useFirebase=()=>{
    const[user,setUser]=useState({});

    const auth=getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle=()=>{
      return signInWithPopup(auth, googleProvider);
  
    }
    const logout=()=>{
        signOut(auth).then(() => {
           setUser({});
          })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user);
            } 
          });
    },[])
    return{logout, signInUsingGoogle,user}
}
export default useFirebase;