
import { Route, Switch , Redirect} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './pages/Shop/Shop';
import SignInAndSignUp from './pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up';
import { auth, createUserProfileDocument } from './FireBase/Firebase-util';
import { Component } from 'react';
import { connect } from 'react-redux';
import {CheckUserSession} from './redux/User/UserAction'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/User/UserSelector';
import CheckOut from './pages/CheckOut/CheckOut';
import Homepage from './pages/Homepage/HomePage';
import ReduxSagas from './Components/Testing-Folder/ReduxSagasTestFile';
import ReactHooks from './Components/Testing-Folder/Hooks/ReactHooks';



class  App extends Component {


  unsubscribeFromAuth = null;

  componentDidMount(){

const {checkUserSession} = this.props
checkUserSession()
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
        <Route exact path="/SagaTest" component= {ReduxSagas} />
        <Route exact path="/HookTest" component= {ReactHooks} />
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
  currentUser: selectCurrentUser,       //Specific Selector 
  
}) 

const mapDispatchToProps = dispatch=> ({
  checkUserSession:()=>dispatch(CheckUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
