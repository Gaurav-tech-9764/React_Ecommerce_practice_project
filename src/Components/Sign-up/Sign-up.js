import React, { Component } from "react";
import FormInput from "../Form-Input/Form-Input";

import CustomButton from "../custom-button/CustomButton";

import "./Sign-up.Style.scss";
import { connect } from "react-redux";
import { SignUpStart } from "../../redux/User/UserAction";


class SignUp extends Component{
    constructor(){
        super();

            this.state = { 
                displayName:'',
                email:'',
                password:'',
                ConfirmPassword:''
            }
        
    }

    handelSubmit = async event =>{

        event.preventDefault();
        const {signUpStart}= this.props
        const {displayName,email,password,ConfirmPassword} = this.state;

        if(password != ConfirmPassword){
            alert("Password Donn`t Match");
            return;
        }
        signUpStart({displayName, email,password})

         
};

    handelchange = event => {
        const {name, value} = event.target;
        this.setState({[name] : value})
    };
    render(){
        const {displayName,email,password,ConfirmPassword} = this.state;
        return(

            <div className="sign-in">
                <h2 className="title">I do Not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handelSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName} 
                    onChange={this.handelchange}
                    label="Display Name"
                    required
                />

                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={this.handelchange}
                    label="Email" 
                    required 
                />
                 <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={this.handelchange}
                    label="Password" 
                    required 

                 />
                <FormInput 
                    type="password" 
                    name="ConfirmPassword" 
                    value={ConfirmPassword} 
                    onChange={this.handelchange}
                    label="Confirm Password" 
                    required 

                />
                   <CustomButton type="submit">SIGN UP</CustomButton>
                    
                </form>
            </div>

        )


    }


}


const mapDispatchToProps= (dispatch)=>({
    signUpStart: userCredentials => dispatch(SignUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps) (SignUp)