
import { Route, Switch , Redirect} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './pages/Shop/Shop';
import SignInAndSignUp from './pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up';
import { createContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {CheckUserSession} from './redux/User/UserAction'
import { selectCurrentUser } from './redux/User/UserSelector';
import CheckOut from './pages/CheckOut/CheckOut';
import Homepage from './pages/Homepage/HomePage';
import ReduxSagas from './Components/Testing-Folder/ReduxSagasTestFile';
import ReactHooks from './Components/Testing-Folder/Hooks/ReactHooks';
import Hooks from './Components/Testing-Folder/Hooks/Hooks';
import ComA from './Components/Testing-Folder/Context/ComA';
import SHOP_DATA from './redux/Shop-redux/ShopData'


////For Context texting//
export const FirstName = createContext(SHOP_DATA)  
export const LastName = createContext()  ///createContext
const   App = () => {

  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

      useEffect(()=>{
        dispatch(CheckUserSession())
      },[dispatch])

    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path="/" component={Homepage}/>
        <Route  path='/Shop' component={Shop}/>
        <Route  exact path="/Signin" render={() => currentUser ? <Redirect to="/"/> : <SignInAndSignUp/>}/>
        <Route exact path="/CheckOut" component= {CheckOut} />
        <Route exact path="/SagaTest" component= {ReduxSagas} />
        <Route exact path="/HookTest" component= {ReactHooks} />
        <Route exact path="/UseTest" component= {Hooks} />
        {/* <FirstName.Provider>  
        <LastName.Provider value = {"Nakhale"}> */}
        <Route exact path="/ContextTest" component= {ComA} />
        {/* </LastName.Provider> */}
        {/* </FirstName.Provider> */}
        
      </Switch>
      
      </div>
  //     <div>
  // component={SignInAndSignUp
  // <Homepage></Homepage>
  //     </div>
    );

  
 
}

// const mapStateToProps =  createStructuredSelector({
//   currentUser: selectCurrentUser,       //Specific Selector 
  
// }) 

// const mapDispatchToProps = dispatch=> ({
//   checkUserSession:()=>dispatch(CheckUserSession())
// })

export default App;
