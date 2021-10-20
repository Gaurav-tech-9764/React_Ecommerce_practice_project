import React, { useState } from "react";
import CustomeButton from "../custom-button/CustomButton";
import FormInput from "../Form-Input/Form-Input";
import "./SignIn.Styles.scss";
import { connect } from "react-redux";
import { EmailSignInStart, GoogleSignInStart} from "../../redux/User/UserAction";



const SignIn = ({EmailSignInStart, googleSignInToStart})=>{
     const [userCredentials, setuserCredentials] =useState({email:"", password:""}) 
     
    
     const {email, password} = userCredentials;

     const handelSubmit = async event =>{
     
        event.preventDefault();
  

        EmailSignInStart(email, password)
       
    }
    const  handelChange = (event) => {
        const {value, name} = event.target;

       setuserCredentials({...userCredentials, [name]:value});
    }
        return(

            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handelSubmit}>
                    <FormInput name="email" label="email" type="email" handelChange={handelChange} value={email} required/>
                   
                    <FormInput name="password" label="password" type="password" handelChange={handelChange} value={password} required/>
                
                    <div className="button">

                    <CustomeButton type="submit">Sign In</CustomeButton>
                    
                    <CustomeButton type="button" onClick={googleSignInToStart} isGoogleSignIn>Sign In With Google</CustomeButton>


                    </div>
                </form>
            </div>

        )


    
}

const mapDispatchToProps = dispatch => ({
    googleSignInToStart: () => dispatch(GoogleSignInStart()),
    EmailSignInStart:(email, password)=> dispatch(EmailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps) (SignIn)