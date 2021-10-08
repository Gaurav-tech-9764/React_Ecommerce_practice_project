import { ConverCollectionsSnapshotMap, firestore } from "../../FireBase/Firebase-util";
import ShopActionTypes from "./ShopTypes";

export const FetchCollectionStart = () =>({

    type: ShopActionTypes.FETCH_COLLECTION_START,
    
})

export const FetchCollectionSuccess = (CollectionMap) => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: CollectionMap
})

export const FetchCollectionFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload:errorMessage
})

// export const FetchCollectionStartAsync = () => {
//     return dispatch =>{

//         const collectionRef =firestore.collection('collections');

//         dispatch(FetchCollectionStart());  //Dispatch the Start Function as event is start

//         collectionRef.get().then( snapShot => {
//             const CollectionMap=ConverCollectionsSnapshotMap(snapShot)
//             dispatch(FetchCollectionSuccess(CollectionMap));
//          }).catch(error=>dispatch(FetchCollectionFailure(error.message)) //dispatch failuer
//          )
  

//     }
// }