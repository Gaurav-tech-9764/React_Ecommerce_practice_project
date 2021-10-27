import {takeLatest ,call, put,all} from 'redux-saga/effects'
import { ConverCollectionsSnapshotMap, firestore } from '../../FireBase/Firebase-util';

import ShopActionTypes from './ShopTypes'
import {FetchCollectionSuccess, FetchCollectionFailure} from './ShopAction'


export function* fetchCollectionAsync(){

    try{

        const collectionRef =firestore.collection('collections');
        const snapShot = yield collectionRef.get()  //geting the snaphot of collection
        const CollectionMap = yield call(ConverCollectionsSnapshotMap, snapShot )
        yield put(FetchCollectionSuccess(CollectionMap));  //Dispatch methoid in saga
    }
catch(error){

    yield put(FetchCollectionFailure(error.message))

    }
  

}

export function* fetchCollectionStart(){
     yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionAsync )
}

export function* ShopSagas(){
    yield all([call(fetchCollectionStart)])
}