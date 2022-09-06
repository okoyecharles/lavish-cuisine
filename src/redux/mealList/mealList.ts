import { ReduxAction } from "../../components/Models";
import * as actionType from "../actionTypes";

const initialState: {}[] = [];

const mealListReducer = (state = initialState, action: ReduxAction) => {
  const { payload } = action;
  switch (action.type) {
    case `${actionType.FETCH_MEAL_LIST}/fulfilled`:
      return payload;
    case `${actionType.FETCH_MEAL_LIST}/rejected`:
      return [{ error: 'no return' }];
    case actionType.CLEAR_MEAL_LIST:
      return [];
    default:
      return state;
  }
}

export default mealListReducer;
