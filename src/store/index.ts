import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/user-slice";
import productReducer from "./products/product-slice";
import orderReducer from "./orders/order-slice";
import filteredReducer from "./filtered-products/filtered-products-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    order: orderReducer,
    filter: filteredReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
