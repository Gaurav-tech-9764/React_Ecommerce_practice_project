import { combineReducers } from "redux";
import CartReducer from "./Cart/CartReducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

import UserReducer from "./User/UserReducer";


const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
} 

export const rootReducer=combineReducers({
    user: UserReducer,
    cart: CartReducer
})

export default persistReducer(persistConfig, rootReducer)
