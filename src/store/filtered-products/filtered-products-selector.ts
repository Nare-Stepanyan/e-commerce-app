import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const filteredSelector = (state: RootState) => state.filter;

export const filteredProductsSelector = createSelector(
  filteredSelector,
  (app) => app.filteredProducts
);
