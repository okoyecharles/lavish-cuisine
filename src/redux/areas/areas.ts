import { Area, ReduxAction } from "../../components/Models";
import * as actionType from "../actionTypes";

const initialState: Area[] = [];

export const areasReducer = (state = initialState, action: ReduxAction) => {
  const { payload } = action;
  switch(action.type){
    case `${actionType.FETCH_AREAS}/fulfilled`:
      return payload;
    default:
      return state;
  }
};
