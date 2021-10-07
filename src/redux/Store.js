import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "./RootReducer";
import createSagaMiddleware from "@redux-saga/core";


const middleWare = [thunk];

if(process.env.NODE_ENV == 'development'){
    middleWare.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWare))

export const persistor = persistStore(store)

export default {store, persistor};