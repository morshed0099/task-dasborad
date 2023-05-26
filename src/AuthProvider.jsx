import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'





export const authUser=createContext()

const AuthProvider = ({children}) => {
    const auth =getAuth(app)
    const [user,setUser]=useState(null)



    const googleAuth= new GoogleAuthProvider()

    const createUserWitheamil=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUserWithEmail=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }

    const loginwithGoogle=()=>{
       return signInWithPopup(auth,googleAuth)
    }
   const logout=()=>{
    return signOut(auth)
   }

   useEffect(()=>{
    const unsubcrible=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
    }) 
    return ()=>unsubcrible()
   },[])
    const userInfo={
        user,
        createUserWitheamil,
        loginwithGoogle,
        loginUserWithEmail,
        logout,
        setUser
    }
    return (
        <div>
            <authUser.Provider value={userInfo}>
               {children}
            </authUser.Provider>
        </div>
    );
};

export default AuthProvider;