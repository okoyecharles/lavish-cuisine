import categoriesReducer from "./categories/categories";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import appStateReducer from "./appState/appState";
import ingredientsReducer from "./ingredients/ingredients";
import { areasReducer } from "./areas/areas";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  appState: appStateReducer,
  ingredients: ingredientsReducer,
  areas: areasReducer,
})

const store = configureStore ({
  reducer : rootReducer,
  middleware: [thunk]
})

export default store;