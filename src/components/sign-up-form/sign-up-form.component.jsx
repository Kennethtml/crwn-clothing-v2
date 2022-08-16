import { useState } from "react";
import { createAuthUserWithEmailandPassword , createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import { auth } from "../../utils/firebase/firebase.utils";
import Inputform from "../FormInput/Form-input.component";
import Button from "../button component/button.component";
import'./sign-up-form.style.scss';


const defaultFormFields={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
}



const SignUpForm=()=>{

const[formFields,setFormFields]=useState(defaultFormFields)
const{displayName,email,password,confirmPassword}=formFields;

function onChangeHandler(event){
    const{name,value}=event.target
    setFormFields({
        ...formFields,[name]:value
    })
    console.log(formFields)
}


const resetFormField=()=>{
    setFormFields(defaultFormFields)
}

const handleSubmit= async (event)=>{
    event.preventDefault()
if(password!==confirmPassword){
    alert("passwords do not match")
    return;
}
try{
const response= await createAuthUserWithEmailandPassword(email,password);
await createUserDocumentFromAuth(response.user,{displayName})
resetFormField();

}
catch(error){
    console.log('user creation encounered an error' ,error)

}

}
    return(
        <div className="sign-up-container">
            <h2>Don't have a account?</h2>
            <span>Sign in with Email and Password</span>
             <form onSubmit={handleSubmit}>

                 <Inputform
                 label="display Name"
                 type="text" 
                 onChange={onChangeHandler} 
                name="displayName" 
                value={formFields.displayName}
                 />

               
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

                <Inputform
                label="Confirm Password"
                 type="password"
                  onChange={onChangeHandler} 
                  name="confirmPassword" 
                  value={formFields.confirmPassword}required/>

                <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm