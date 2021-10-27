import firebase from 'firebase/compat/app';
import { getAuth,onAuthStateChanged } from "firebase/auth";
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
            alert("Error in Creating User",error.message)
         

          }

        }
        return userRef

  };


  export const AddCollectionAndDocuments =  async (
    collectionKey,
    ObjectToAdd
  )=> {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch();
    ObjectToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef,obj);
      
    });
   return await batch.commit()

  } 

 export  const ConverCollectionsSnapshotMap = (collections) => {

    const transFormedCollection = collections.docs.map(doc=>{
      const{title, items} = doc.data();

      return{
        routeName: encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }
    });

 return transFormedCollection.reduce((accumulator, collection)=>{

  accumulator[collection.title.toLowerCase()]=collection;
  return accumulator
 },{})
     
  }



export const getCurrentUser= () => {
  return new Promise((resolve, reject)=> {
    const unsubcribe = onAuthStateChanged(auth,  userAuth=>{
      unsubcribe();
      resolve(userAuth)
    },reject)
  })
}

  firebase.initializeApp(config);

  export const auth = getAuth();
  export const firestore = firebase.firestore();

  export const  GoogleProvider = new GoogleAuthProvider();

  GoogleProvider.setCustomParameters({prompt: 'select_account'})

  
  export const signInWithGoogle = () => signInWithPopup(auth, GoogleProvider)
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