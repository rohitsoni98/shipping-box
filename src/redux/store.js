import { configureStore } from "@reduxjs/toolkit";
import boxReducer from "./reducers/boxReducer"


const store = configureStore({
  reducer: {
    boxes: boxReducer,
  },
});

export default store;