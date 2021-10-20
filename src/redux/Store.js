import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./RootReducer";
import createSagaMiddleware from "@redux-saga/core";

import RootSagas from "./RootSagas";

const SagaMiddleware = createSagaMiddleware()

const middleWare = [SagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middleWare.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWare))

SagaMiddleware.run(RootSagas)

export const persistor = persistStore(store)

export default {store, persistor};