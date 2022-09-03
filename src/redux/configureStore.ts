import categoriesReducer from "./categories/categories";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import appStateReducer from "./appState/appState";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  appState: appStateReducer,
})

const store = configureStore ({
  reducer : rootReducer,
  middleware: [thunk]
})

export default store;