import { createSlice } from "@reduxjs/toolkit";
import { Order } from "../../type";
import { getOrders, createOrder } from "./actions";

type OrderState = {
  orderHistory: Order[];
  isLoading: boolean;
};

const initialState: OrderState = {
  orderHistory: [],
  isLoading: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orderHistory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orderHistory = action.payload;
    });
    builder.addCase(getOrders.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.orderHistory = [...state.orderHistory, action.payload];
    });
  },
});

export const { setOrders } = orderSlice.actions;

export default orderSlice.reducer;
