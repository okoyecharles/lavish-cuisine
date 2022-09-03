import { Ingredient, ReduxAction } from "../../components/Models";
import * as actionType from "../actionTypes";

const initialState: Ingredient[] = [];

const ingredientsReducer = (state = initialState, action: ReduxAction) => {
  const { payload } = action;
  switch (action.type) {
    case `${actionType.FETCH_INGREDIENTS}/fulfilled`:
      return payload;
    default:
      return state;
  }
}
export default ingredientsReducer;