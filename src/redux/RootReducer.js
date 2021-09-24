import { combineReducers } from "redux";
import CartReducer from "./Cart/CartReducer";

import UserReducer from "./User/UserReducer";


export default combineReducers({
    user: UserReducer,
    cart: CartReducer
})