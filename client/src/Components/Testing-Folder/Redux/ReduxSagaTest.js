import { take } from "@redux-saga/core/effects";

export function* incrementSaga(){
    yield take('INCREMENT')
}