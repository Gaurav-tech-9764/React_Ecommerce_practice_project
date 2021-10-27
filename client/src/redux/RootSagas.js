import { all,call } from "@redux-saga/core/effects";
import { CartSagas } from "./Cart/CartSagas";

import { ShopSagas } from "./Shop-redux/ShopSagas";
import { UserSagas } from "./User/UserSagas";

export default function* RootSagas(){
    yield all([
        call(ShopSagas), call(UserSagas), call(CartSagas)
    ])

}