import { AppState, ReduxAction } from "../../components/Models";
import * as actionType from "../actionTypes";

const initialState: AppState = {
  categoriesLoaded: false,
  ingredientsLoaded: false,
}

const appStateReducer = (state = initialState, action: ReduxAction) => {
  const { payload } = action;
  switch (action.type) {
    case actionType.UPDATE_CATEGORIES_LOADED:
      return { ...state, categoriesLoaded: !state.categoriesLoaded }
    case actionType.UPDATE_INGREDIENTS_LOADED:
      return { ...state, ingredientsLoaded: !state.ingredientsLoaded }
    default:
      return state;
  }
}
export default appStateReducer;