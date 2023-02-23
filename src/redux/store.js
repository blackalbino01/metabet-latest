import { configureStore } from "@reduxjs/toolkit";

import walletConnect from "./walletConnect/walletConnectSlice";
//Other configs
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  //Wallet
  wallet: walletConnect,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
