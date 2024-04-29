import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

export const DarkModeContext = createContext({
    darkMode: false,
    toggleDarkMode: () => {},
  });

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export const AuthProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 const createUser = (email, password) =>{
     setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
 }
const updateUser = (name, photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
        displayName: name, photoURL: photo
    })
}

 const signIn = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
 }
const createGoogle =()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}
const createGithub =()=>{
    setLoading(true)
    return signInWithPopup(auth, gitHubProvider)
}

const logOut =() =>{
    setLoading(true)
    return signOut(auth)
}

useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, currentUser=>{
    setLoading(false)
    setUser(currentUser)
})
return ()=>{
    unsubscribe()
}
},[])

const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const authInfo = {
    user,
    createUser,
    setUser,
    signIn,
    createGoogle,
    createGithub,
    logOut,
    updateUser,
    loading,
    darkMode, 
    toggleDarkMode
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes ={
    children: PropTypes.node
}