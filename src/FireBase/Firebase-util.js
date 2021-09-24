import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import 'firebase/firestore' 
import 'firebase/compat/firestore';
import { GoogleAuthProvider , signInWithPopup} from "firebase/auth";

const config = {
    apiKey: "AIzaSyACf_prwK5btWgMqK6ZUXZLn7LvFXc1HTU",
    authDomain: "my-react-project-gaurav.firebaseapp.com",
    projectId: "my-react-project-gaurav",
    storageBucket: "my-react-project-gaurav.appspot.com",
    messagingSenderId: "98837160630",
    appId: "1:98837160630:web:0066a44cb97be683977c17",
    measurementId: "G-KL9J9CG40J"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => 
  {

        if(!userAuth) return;

        const userRef = firestore.doc(`Users/${userAuth.uid}`);
        const snapShot = await userRef.get();

        if(!snapShot.exists){

          const { displayName, email} = userAuth;
          
          const createdAt = new Date();

          try{
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
          }
          catch(error){
            console.log("Error in Creating User",error.message)

          }

        }
        return userRef

  };

  firebase.initializeApp(config);

  export const auth = getAuth();
  export const firestore = firebase.firestore();

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'})

  
  export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  export default firebase;