import { configureStore } from "@reduxjs/toolkit";
import oraculoReducer from "../features/oraculo/oraculoSlice";

export const store = configureStore({
  reducer: {
    oraculo: oraculoReducer,
  },
});
