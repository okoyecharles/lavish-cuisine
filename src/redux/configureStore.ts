import categoriesReducer from "./categories/categories";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  categories: categoriesReducer,
})

const store = configureStore ({
  reducer : rootReducer,
  middleware: [thunk]
})

export default store;