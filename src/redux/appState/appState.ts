import { AppState, ReduxAction } from "../../components/Models";
import * as actionType from "../actionTypes";

const initialState: AppState = {
  categoriesLoaded: false,
}

const appStateReducer = (state = initialState, action: ReduxAction) => {
  const { payload } = action;
  switch (action.type) {
    case actionType.UPDATE_CATEGORIES_LOADED:
      return { ...state, categoriesLoaded: !state.categoriesLoaded }
    default:
      return state;
  }
}
export default appStateReducer;