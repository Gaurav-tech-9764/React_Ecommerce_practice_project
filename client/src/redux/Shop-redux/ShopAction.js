
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

