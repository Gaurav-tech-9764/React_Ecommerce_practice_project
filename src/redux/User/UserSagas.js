import { takeLatest, put, all, call} from "@redux-saga/core/effects";
import UserActionTypes from "./UserTypes";
import {signInWithPopup, signOut } from "firebase/auth";
import {signInWithEmailAndPassword , createUserWithEmailAndPassword} from "firebase/auth"

import { GoogleProvider, auth, createUserProfileDocument,getCurrentUser } from "../../FireBase/Firebase-util";
import { SignInFailure, SignInSuccess, SignOutFailure, SignOutSuccess, SignUpFailure, SignUpSuccess } from "./UserAction";

export function* getSnapShotForUser(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(
                     SignInSuccess({id:userSnapshot.id, ...userSnapshot.data()})
                 )
        }
    catch(error){
                yield put(
                             SignInFailure(error)
                         )
                }
    }

export function* SignInWithGoogle(){
    try{
        
        const {user} = yield signInWithPopup(auth, GoogleProvider);
             yield getSnapShotForUser(user)

        }
    catch(error){
             yield put(
                        SignInFailure(error)
                      )
                }
    }

export function* SignInWithEmail({payload: {email , password}}){
    try{
        const {user} = yield signInWithEmailAndPassword( auth, email,password)
            yield getSnapShotForUser(user)

    }
    catch(error){
                yield put(SignInFailure(error))
            }
    }

export function* isUserAuthenticated(){

    try{
        const userAuth = yield getCurrentUser();
    if(!userAuth) 
    return;
    yield getSnapShotForUser(userAuth)

    }catch(error){

    }

}

export function* SignOut(){
    try{
        yield signOut(auth)
        yield put(SignOutSuccess())

    }catch(error){
        yield put (SignOutFailure(error))
    }
}

export function* SignUp({payload:{email, password, displayName}}){
try{
    const {user} = yield createUserWithEmailAndPassword(auth,
        
        email,
        password
    );

    yield put(SignUpSuccess({user,additionalData:{displayName}}))
}
    catch(error){
        yield put(SignUpFailure(error))

    }  
}


export function* SignInAfterSignUp({ payload: { user, additionalData } }){

    yield getSnapShotForUser(user, additionalData)

}

export function* onGoogleSignInStart(){

    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, SignInWithGoogle)

}

export function* onEmailSignInstart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, SignInWithEmail )
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}


export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, SignOut)
}


export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, SignUp)
}
export function* onSignUpSuccess(){

    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, SignInAfterSignUp)
}


export function* UserSagas(){
    yield all([call(onGoogleSignInStart), call(onEmailSignInstart),
         call(onCheckUserSession), call(onSignOutStart),
         call(onSignUpStart), call(onSignUpSuccess)
        ])
}





