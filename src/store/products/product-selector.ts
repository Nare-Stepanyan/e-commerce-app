import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const itemSelector = (state: RootState) => state.product;

export const productsSelector = createSelector(
  itemSelector,
  (app) => app.products
);
export const productSelector = createSelector(
  itemSelector,
  (app) => app.product
);

export const isLoadingSelector = createSelector(
  itemSelector,
  (app) => app.isLoading
);

export const maxPriceSelector = createSelector(
  itemSelector,
  (app) => app.maxPrice
);

export const minPriceSelector = createSelector(
  itemSelector,
  (app) => app.minPrice
);
