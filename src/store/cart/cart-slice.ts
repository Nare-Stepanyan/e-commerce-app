import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../type";
import {
  addItemToCart,
  calculateCartSubtotal,
  calculateCartTotalQuantity,
  decreaseCartItem,
  removeItemFromCart,
} from "./cart-actions";
import { UPDATE_CART_TYPES } from "../../constants";
import { toast } from "react-toastify";

type CartState = {
  cartItems: Product[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
  previousURL: "";
};

const initialState: CartState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") as any)
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  previousURL: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      const { payload } = action;
      const type = payload.type;
      let updatedCart: Product[];

      switch (type) {
        case UPDATE_CART_TYPES.ADD_TO_CART:
          updatedCart = addItemToCart(
            state.cartItems,
            payload.product as Product
          );
          break;
        case UPDATE_CART_TYPES.DECREASE_CART:
          updatedCart = decreaseCartItem(state.cartItems, payload.product);
          break;
        case UPDATE_CART_TYPES.REMOVE_FROM_CART:
          updatedCart = removeItemFromCart(state.cartItems, payload.product);
          break;
        case UPDATE_CART_TYPES.CLEAR_CART:
          updatedCart = [];
          toast.info(`Cart cleared`, {
            position: "top-left",
          });
          break;
        default:
          updatedCart = state.cartItems;
      }

      state.cartItems = updatedCart;
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    },
    calculateSubtotal: (state) => {
      state.cartTotalAmount = calculateCartSubtotal(state.cartItems);
    },
    calculateTotalQuantity: (state) => {
      state.cartTotalQuantity = calculateCartTotalQuantity(state.cartItems);
    },
    saveUrl: (state, action) => {
      state.previousURL = action.payload;
    },
  },
});

export const {
  updateCart,
  calculateSubtotal,
  calculateTotalQuantity,
  saveUrl,
} = cartSlice.actions;

export default cartSlice.reducer;
