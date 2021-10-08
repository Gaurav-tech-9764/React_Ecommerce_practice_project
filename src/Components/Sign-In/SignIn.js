import react, { Component } from "react";
import CustomeButton from "../custom-button/CustomButton";
import FormInput from "../Form-Input/Form-Input";
import "./SignIn.Styles.scss";
import { connect } from "react-redux";
import { EmailSignInStart, GoogleSignInStart} from "../../redux/User/UserAction";



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
        const {EmailSignInStart} = this.props
        const {email, password} = this.state;

        EmailSignInStart(email, password)
       
    }
    handelChange = (event) => {
        const {value, name} = event.target;

        this.setState({[name]:value});
    }

    render(){
        const {googleSignInToStart} = this.props
        return(

            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handelSubmit}>
                    <FormInput name="email" label="email" type="email" handelChange={this.handelChange} value={this.state.email} required/>
                   
                    <FormInput name="password" label="password" type="password" handelChange={this.handelChange} value={this.state.password} required/>
                
                    <div className="button">

                    <CustomeButton type="submit">Sign In</CustomeButton>
                    
                    <CustomeButton type="button" onClick={googleSignInToStart} isGoogleSignIn>Sign In With Google</CustomeButton>


                    </div>
                </form>
            </div>

        )


    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInToStart: () => dispatch(GoogleSignInStart()),
    EmailSignInStart:(email, password)=> dispatch(EmailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps) (SignIn)