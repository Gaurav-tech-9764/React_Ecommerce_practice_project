import React, {useState } from "react";
import FormInput from "../Form-Input/Form-Input";

import CustomButton from "../custom-button/CustomButton";

import "./Sign-up.Style.scss";
import { connect } from "react-redux";
import { SignUpStart } from "../../redux/User/UserAction";


const SignUp = ({signUpStart}) => {
   
const [UserDetails, setUserDetails] = useState( { 
    displayName:'',
    email:'',
    password:'',
    ConfirmPassword:''
})
        
        
   
const {displayName,email,password,ConfirmPassword} = UserDetails 

  const  handelSubmit = async event =>{

        event.preventDefault();
    

        if(password !== ConfirmPassword){
            alert("Password Donn`t Match");
            return;
        }
        signUpStart({displayName, email,password})

         
};

  const  handelchange = event => {
        const {name, value} = event.target;
        setUserDetails({...UserDetails,[name] : value})
    };
   
       
        return(

            <div className="sign-in">
                <h2 className="title">I do Not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={handelSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName} 
                    onChange={handelchange}
                    label="Display Name"
                    required
                />

                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={handelchange}
                    label="Email" 
                    required 
                />
                 <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={handelchange}
                    label="Password" 
                    required 

                 />
                <FormInput 
                    type="password" 
                    name="ConfirmPassword" 
                    value={ConfirmPassword} 
                    onChange={handelchange}
                    label="Confirm Password" 
                    required 

                />
                   <CustomButton type="submit">SIGN UP</CustomButton>
                    
                </form>
            </div>

        )




}


const mapDispatchToProps= (dispatch)=>({
    signUpStart: userCredentials => dispatch(SignUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps) (SignUp)