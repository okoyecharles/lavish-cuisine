const initialState: {}[] = []

interface ActionKeys {
  type: string,
  payload: any,
}

const categoriesReducer = (state = initialState, action: ActionKeys) => {
  switch(action.type){
    default: return state;
  }
}

export default categoriesReducer;