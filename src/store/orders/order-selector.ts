import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const orderSelector = (state: RootState) => state.order;

export const orderHistorySelector = createSelector(
  orderSelector,
  (app) => app.orderHistory
);
export const isLoadingSelector = createSelector(
  orderSelector,
  (app) => app.isLoading
);
