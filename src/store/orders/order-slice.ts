import { createSlice } from "@reduxjs/toolkit";
import { Order } from "../../type";
import { getOrders, createOrder } from "./actions";

type OrderState = {
  orders: Order[];
  isLoading: boolean;
};

const initialState: OrderState = {
  orders: [],
  isLoading: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    });
    builder.addCase(getOrders.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.orders = [...state.orders, action.payload];
    });
  },
});

export const { setOrders } = orderSlice.actions;

export default orderSlice.reducer;
