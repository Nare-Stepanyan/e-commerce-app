import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const cartSelector = (state: RootState) => state.cart;

export const cartItemsSelector = createSelector(
  cartSelector,
  (app) => app.cartItems
);
export const cartTotalQuantitySelector = createSelector(
  cartSelector,
  (app) => app.cartTotalQuantity
);
export const cartTotalAmountSelector = createSelector(
  cartSelector,
  (app) => app.cartTotalAmount
);
export const previousURLSelector = createSelector(
  cartSelector,
  (app) => app.previousURL
);
