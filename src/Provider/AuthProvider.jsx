import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

 const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
 }
const updateUser = (name, photo)=>{
    return updateProfile(auth.currentUser,{
        displayName: name, photoURL: photo
    })
}

 const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
 }
const createGoogle =()=>{
    return signInWithPopup(auth, googleProvider)
}
const createGithub =()=>{
    return signInWithPopup(auth, gitHubProvider)
}

const logOut =() =>{
    return signOut(auth)
}

useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, currentUser=>{
    setUser(currentUser)
})
return ()=>{
    unsubscribe()
}
},[])


  const authInfo = {
    user,
    createUser,
    setUser,
    signIn,
    createGoogle,
    createGithub,
    logOut,
    updateUser
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes ={
    children: PropTypes.node
}