import * as actionType from "../actionTypes";

const initialState: {}[] = []

interface ActionKeys {
  type: string,
  payload: any,
}

const categoriesReducer = (state = initialState, action: ActionKeys) => {
  const { payload } = action;

  switch (action.type) {
    case `${actionType.FETCH_CATEGORY_NAMES}/fulfilled`:
      return payload;
    case `${actionType.LOAD_CATEGORIES}/fulfilled`:
      return state.map((category, catIdx) => ({ ...category, meals: payload[catIdx].meals }));
    default:
      return state;
  }
}

export default categoriesReducer;
