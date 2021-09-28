import { combineReducers } from "redux";
import CartReducer from "./Cart/CartReducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

import UserReducer from "./User/UserReducer";
import DirectoryReducer from "./Directory-redux/DirectoryReducer";
import ShopReducer from "./Shop-redux/ShopReducer";


const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
} 

export const rootReducer=combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    Shop: ShopReducer
})

export default persistReducer(persistConfig, rootReducer)
