import { AppState, ReduxAction } from "../../components/Models";
import * as actionType from "../actionTypes";

const initialState: AppState = {
  categoriesLoaded: false,
  ingredientsLoaded: false,
  areasLoaded: false,
  mealListLoaded: {
    name: '',
    base: '',
  }
}

const appStateReducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case actionType.UPDATE_CATEGORIES_LOADED:
      return { ...state, categoriesLoaded: !state.categoriesLoaded }
    case actionType.UPDATE_INGREDIENTS_LOADED:
      return { ...state, ingredientsLoaded: !state.ingredientsLoaded }
    case actionType.UPDATE_AREAS_LOADED:
      return { ...state, areasLoaded: !state.areasLoaded}
    case actionType.UPDATE_MEAL_LIST_LOADED:
      return { ...state, mealListLoaded: action.payload}
    default:
      return state;
  }
}
export default appStateReducer;