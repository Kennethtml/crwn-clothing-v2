import React from 'react'
import {signInWithGooglePopup,auth,signInwithGoogleRedirect,createUserWithEmailandPassword, createUserDocumentFromAuth}from '../../utils/firebase/firebase.utils'
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import'./authentication.style.scss';

const Authentication = () => {

    const logGoogleUser= async()=>{
        const {user}=await signInWithGooglePopup();
       createUserDocumentFromAuth(user)
       console.log(user.uid)
    }

    

   
    
  return (
      <div  className='authentication-container'>
          {/* <button onClick={logGoogleUser}>
              SignInPage
          </button> */}
         <SignInForm/>
         <SignUpForm/>

      </div>
  )
}

export default Authentication