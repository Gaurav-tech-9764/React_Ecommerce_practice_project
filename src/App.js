
import { Route, Switch , Redirect} from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './pages/HomePage';
import Shop from './pages/Shop/Shop';
import SignInAndSignUp from './pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up';
import { auth, createUserProfileDocument } from './FireBase/Firebase-util';
import { Component } from 'react';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/User/UserAction'


class  App extends Component {


  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props

    console.log("testing app",setCurrentUser)

   this.unsubscribeFromAuth =  onAuthStateChanged(auth, async user=>
      {
        if(user){

          const userRef = await  createUserProfileDocument(user);
          userRef.onSnapshot(snapShots => {
              setCurrentUser ({
                id: snapShots.id,
                ...snapShots.data()
              });
          });
        }
   
      setCurrentUser(user)
      });
  }

  componentWillUnmount(){

    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path="/" component={Homepage}/>
        <Route  exact path="/Shop" component={Shop}/>
        <Route  exact path="/Signin" render={() => this.props.currentUser ? <Redirect to="/"/> : <SignInAndSignUp/>}/>
      </Switch>
      
      </div>
  //     <div>
  // component={SignInAndSignUp
  // <Homepage></Homepage>
  //     </div>
    );

  }
 
}

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
