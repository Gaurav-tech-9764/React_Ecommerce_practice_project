import UserActionTypes  from "./UserTypes";



export const GoogleSignInStart = () => ({

    type: UserActionTypes.GOOGLE_SIGN_IN_START,

});

export const SignInSuccess = (user) => ({

    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload:user

});

export const SignInFailure = (error) => ({

    type: UserActionTypes.SIGN_IN_FAILURE,
    payload:error

});

export const EmailSignInStart = (emailAndPassword) => ({

    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload:emailAndPassword

});

export const CheckUserSession = () => ({
    type:UserActionTypes.CHECK_USER_SESSION
})
 export const SignOutStart = () =>({
     type:UserActionTypes.SIGN_OUT_START
 })

 export const SignOutSuccess = () => ({
     type:UserActionTypes.SIGN_OUT_SUCCESS
 })

 export const SignOutFailure = (error) =>({
     type:UserActionTypes.SIGN_OUT_FAILURE,
     payload:error
 })

 export const SignUpStart =(UserCredentials) =>({
     type:UserActionTypes.SIGN_UP_START,
     payload:UserCredentials
 })

 export const SignUpSuccess = ({user, additionalData}) => ({
     type:UserActionTypes.SIGN_UP_SUCCESS,
     payload:{user, additionalData}
 })
 export const SignUpFailure = (error) => ({
     type:UserActionTypes.SIGN_UP_FAILURE,
     payload:error
 })