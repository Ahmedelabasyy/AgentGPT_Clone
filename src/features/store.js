import { configureStore , getDefaultMiddleware,combineReducers} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query'
import statesSlice from "./slices/statesSlice";


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: "root",
    storage,
}


const rootReducer = combineReducers({
    agent: statesSlice,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)