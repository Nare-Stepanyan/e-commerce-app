import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order } from "../../type";

const baseURL = `${process.env.BASE_URL}/orders`;

export const getOrders = createAsyncThunk(
  "order/getOrders",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(baseURL);
      return data;
    } catch (error) {
      return rejectWithValue("Error fetching orders");
    }
  }
);

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (order: Order, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(baseURL, order);
      return data;
    } catch (error) {
      return rejectWithValue("Error creating order");
    }
  }
);
