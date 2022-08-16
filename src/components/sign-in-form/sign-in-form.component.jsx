import { useState } from "react";
import { createAuthUserWithEmailandPassword , createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import { auth } from "../../utils/firebase/firebase.utils";
import Inputform from "../FormInput/Form-input.component";
import Button from "../button component/button.component";
import { signInWithGooglePopup, signInAuthUserWithEmailandPassword} from "../../utils/firebase/firebase.utils";
import { Usercontext } from "../context/user.context";
import { useContext } from "react";
import'./sign-in-form.style.scss';



const defaultFormFields={
    email:"",
    password:"",
    
}



const SignInForm=()=>{
    //user data stored in state using useContext
    // const {setCurrentUser}=useContext(Usercontext)
    

//sign In with Google authentication function
     const signInwithGoogle= async()=>{
        const {user}=await signInWithGooglePopup();
      
       
    }

const[formFields,setFormFields]=useState(defaultFormFields)
const{email,password,}=formFields;

function onChangeHandler(event){
    const{name,value}=event.target
    setFormFields({
        ...formFields,[name]:value
    })
}


const resetFormField=()=>{
    setFormFields(defaultFormFields)
}

const handleSubmit= async (event)=>{
    event.preventDefault()

try{

const {user}= await signInAuthUserWithEmailandPassword(email,password)




}
catch(error){
   if (error.code==='auth/wrong-password'){
       alert('wrong password')
   }
   else if(error.code==='auth/user-not-found'){
       alert('wrong username or password')
   }
   console.log(error)

}

}
    return(
        <div className="sign-up-container">
            <h2>Already have a account?</h2>
            <span>Sign in with Email and Password</span>
             <form onSubmit={handleSubmit}>
               
                <Inputform 
                label="Email"
                type="email"
                 onChange={onChangeHandler} 
                  name="email" 
                  value={formFields.email}required/>

                 
                <Inputform
                label="Password"
                 type="password"
                  onChange={onChangeHandler} 
                  name="password"
                   value={formFields.password}required/>
                <div className="buttons-container">

                <Button type="submit">Sign In</Button>
                <Button type="button" onClick={signInwithGoogle}>Google Sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm