import { even } from "prelude-ls";
import react, { Component } from "react";
import config, { signInWithGoogle } from "../../FireBase/Firebase-util";
import CustomeButton from "../custom-button/CustomButton";
import FormInput from "../Form-Input/Form-Input";
import "./SignIn.Styles.scss";
import firebase from "firebase/compat";
import { auth, createUserProfileDocument} from "../../FireBase/Firebase-util";
import {signInWithEmailAndPassword } from "firebase/auth"
import { withRouter } from "react-router-dom";



class SignIn extends Component {
 
    constructor(props){

        super(props)

        this.state={

            email:"", 
            password:""
        }

    }

    handelSubmit = async event =>{
     
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await signInWithEmailAndPassword( auth,
                email,
                password)
              
            this.setState({email:'',
            password:''
        });

        }
        catch (error) {
            alert(error.message);
          }


        this.setState({email:'', password:''})
    }
    handelChange = (event) => {
        const {value, name} = event.target;

        this.setState({[name]:value});
    }

    render(){
        return(

            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handelSubmit}>
                    <FormInput name="email" label="email" type="email" handelChange={this.handelChange} value={this.state.email} required/>
                   
                    <FormInput name="password" label="password" type="password" handelChange={this.handelChange} value={this.state.password} required/>
                
                    <div className="button">

                    <CustomeButton type="submit">Sign In</CustomeButton>
                    
                    <CustomeButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomeButton>


                    </div>
                </form>
            </div>

        )


    }
}

export default SignIn