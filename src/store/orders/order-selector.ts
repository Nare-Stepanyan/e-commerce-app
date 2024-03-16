import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const orderSelector = (state: RootState) => state.order;

export const ordersSelector = createSelector(
  orderSelector,
  (app) => app.orders
);
export const loadingSelector = createSelector(
  orderSelector,
  (app) => app.isLoading
);
