import { ADD_BOX } from "../actions/boxActions"

const initialState = {
  boxes: [],
};

const boxReducer = (state = initialState, action) => {
  if (action.type === ADD_BOX) {
    return { ...state, boxes: [...state.boxes, action.payload] };
  } else {
    return { ...state };
  }
};

export default boxReducer


