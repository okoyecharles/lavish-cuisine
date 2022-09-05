import { MealT, ReduxAction } from '../../components/Models';
import * as actionType from '../actionTypes';

const initialState: MealT = {};

const mealReducer = (state = initialState, action: ReduxAction) => {
  const { payload, type } = action;
  switch (type) {
    case `${actionType.FETCH_MEAL_INFO}/fulfilled`:
      return payload;
    default:
      return state;
  }
}

export default mealReducer;