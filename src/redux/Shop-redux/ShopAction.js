import ShopActionTypes from "./ShopTypes";

export const updateCollection = (collectionMap) =>({

    type: ShopActionTypes.UPDATE_COLLECTION,
    payload: collectionMap
})