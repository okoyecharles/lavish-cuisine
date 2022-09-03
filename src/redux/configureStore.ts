import categoriesReducer from "./categories/categories";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import appStateReducer from "./appState/appState";
import ingredientsReducer from "./ingredients/ingredients";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  appState: appStateReducer,
  ingredients: ingredientsReducer,
})

const store = configureStore ({
  reducer : rootReducer,
  middleware: [thunk]
})

export default store;