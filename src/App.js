
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
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/User/UserSelector';
import CheckOut from './pages/CheckOut/CheckOut';



class  App extends Component {


  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props



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
        <Route  path='/Shop' component={Shop}/>
        <Route  exact path="/Signin" render={() => this.props.currentUser ? <Redirect to="/"/> : <SignInAndSignUp/>}/>
        <Route exact path="/CheckOut" component= {CheckOut} />
      
      
      </Switch>
      
      </div>
  //     <div>
  // component={SignInAndSignUp
  // <Homepage></Homepage>
  //     </div>
    );

  }
 
}

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser,
  
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
