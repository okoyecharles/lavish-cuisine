import * as actionType from "../actionTypes";

const initialState: {}[] = []

interface ActionKeys {
  type: string,
  payload: any,
}

const categoriesReducer = (state = initialState, action: ActionKeys) => {
  const { payload } = action;

  switch(action.type){
    case `${actionType.FETCH_CATEGORIES}/fulfilled`:
      return payload;
    default:
      return state;
  }
}

export default categoriesReducer;