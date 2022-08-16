import { createContext } from "react";
import { useState, useEffect } from "react";
import { onAuthStateChangedlistener } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

//the actual value you want to acess
export const Usercontext=createContext({
    currentUser:null,
    setCurrentUser:()=>null
})

export const UserProvider=({children})=>{
    const[currentUser,setCurrentUser]=useState(null)
    const value={currentUser,setCurrentUser}

    useEffect(()=>{
        const unsubscribed= onAuthStateChangedlistener(
            (user)=>{
                if(user){
                     createUserDocumentFromAuth(user)
                }
                setCurrentUser(user)
            }

        )
        
    },[])

    console.log(currentUser)
    return(
        <Usercontext.Provider value={value} >
            {children}
        </Usercontext.Provider>
    )
}