
import { Route, Switch , Redirect} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
// import Shop from './pages/Shop/Shop';
// import SignInAndSignUp from './pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up';
import { React,  createContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {CheckUserSession} from './redux/User/UserAction'
import { selectCurrentUser } from './redux/User/UserSelector';
// import CheckOut from './pages/CheckOut/CheckOut';
// import Homepage from './pages/Homepage/HomePage';
import ReduxSagas from './Components/Testing-Folder/ReduxSagasTestFile';
import ReactHooks from './Components/Testing-Folder/Hooks/ReactHooks';
import Hooks from './Components/Testing-Folder/Hooks/Hooks';
import ComA from './Components/Testing-Folder/Context/ComA';
import SHOP_DATA from './redux/Shop-redux/ShopData'
import { lazy } from 'react';
import { Suspense } from 'react';
import SimpleSpinner from './Components/NewSpinner/SimpleSpinner';
import ErrorBoundary from './Components/Error-Boundary/ErroBoundary';
import CallBack from './Components/Testing-Folder/CallBack/CallBack';


const Homepage = lazy(()=> import('./pages/Homepage/HomePage'))
const Shop = lazy(()=>import('./pages/Shop/Shop'))
const SignInAndSignUp = lazy(()=>import( './pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up'))
const CheckOut = lazy(()=>import('./pages/CheckOut/CheckOut'))
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
      <ErrorBoundary>
      <Suspense fallback= {<SimpleSpinner/>} >
      <Route exact path="/" component={Homepage}/>
    
        <Route  path='/Shop' component={Shop}/>
        <Route  exact path="/Signin" render={() => currentUser ? <Redirect to="/"/> : <SignInAndSignUp/>}/>
        <Route exact path="/CheckOut" component= {CheckOut} />
      
        <Route exact path="/SagaTest" component= {ReduxSagas} />
        <Route exact path="/HookTest" component= {ReactHooks} />
        <Route exact path="/UseTest" component= {Hooks} />
        <Route exact path="/CallBack" component={CallBack} />
        {/* <FirstName.Provider>  
        <LastName.Provider value = {"Nakhale"}> */}
        <Route exact path="/ContextTest" component= {ComA} />
        {/* </LastName.Provider> */}
        {/* </FirstName.Provider> */}
        </Suspense>
        </ErrorBoundary>
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
