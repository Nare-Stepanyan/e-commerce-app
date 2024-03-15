import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const authSelector = (state: RootState) => state.user;

export const usersSelector = createSelector(authSelector, (app) => app.users);
export const userSelector = createSelector(authSelector, (app) => app.user);
export const loadingSelector = createSelector(
  authSelector,
  (app) => app.isLoading
);
export const isAuthenticatedSelector = createSelector(
  authSelector,
  (app) => app.isAuthenticated
);
