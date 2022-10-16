import React, { createContext, useEffect, useState, useSyncExternalStore } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'; 
import app from '../Firebase/firebase.config'; 

export const AuthContext = createContext(); 
const auth = getAuth(app); 

const UserContext = ({children}) => {
   const [user, setUser] = useState(null); 
   
   const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password); 
   const signIn = (email, password ) => signInWithEmailAndPassword(auth, email, password); 
   const logOut = () => signOut(auth);    
   useEffect(()=> {
      const unSubscribe =  onAuthStateChanged(auth, (currentUser)=> {
         setUser(currentUser); 
      })
      return ()=> {
         unSubscribe(); 
      }
   }, [])
   const authInfo = {user, createUser, signIn, logOut}
   return (
     <AuthContext.Provider value={authInfo}>
         {children}
     </AuthContext.Provider>
   );
};

export default UserContext;