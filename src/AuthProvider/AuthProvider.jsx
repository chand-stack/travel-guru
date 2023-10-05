import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null) 
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
    }

    const userDetail = name => {
        return updateProfile(auth.currentUser, {
            displayName: `${name}` , photoURL:""
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, current=>{
            setUser(current)
            console.log(current)
        })

        return () => {
            return unSubscribe()
        }
    },[])



    const authInfo = {
        user,
        createUser,
        userDetail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;