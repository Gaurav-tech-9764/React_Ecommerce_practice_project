import { takeLatest, put, all, call} from "@redux-saga/core/effects";
import UserActionTypes from "../User/UserTypes";
import { ClearCart } from "./CartAction";





export function* ClearCartOnSignOut(){

  yield put(ClearCart())

}

export function* onSignOutSuccess(){
   yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, ClearCartOnSignOut)

}

export function* CartSagas(){
    yield all([call(onSignOutSuccess)])
}