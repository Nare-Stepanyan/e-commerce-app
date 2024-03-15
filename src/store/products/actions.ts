import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../type";

const baseURL = "http://localhost:8080/products";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(baseURL);
      return data;
    } catch (error) {
      return rejectWithValue("Error fetching products");
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await axios(`${baseURL}/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue("Error fetching product by ID");
    }
  }
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (user: Product, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(baseURL, user);
      return data;
    } catch (error) {
      return rejectWithValue("Error creating product");
    }
  }
);
