import { ReduxAction } from '../../components/Models';

const initialState: {} = {};

const mealReducer = (state = initialState, action: ReduxAction) => {
  const { payload, type } = action;
  switch (type) {
    default:
      return state;
  }
}

export default mealReducer;