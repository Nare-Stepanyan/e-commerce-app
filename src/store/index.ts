import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/user-slice";
import productReducer from "./products/product-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
