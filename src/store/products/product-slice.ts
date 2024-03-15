import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../type";
import { getProducts, createProduct, getProductById } from "./actions";

type ProductState = {
  products: Product[];
  product: Product | null;
  isLoading: boolean;
};

const initialState: ProductState = {
  products: [],
  product: null,
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getProductById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(getProductById.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products = [...state.products, action.payload];
    });
  },
});

export const { setProducts, setProduct } = productSlice.actions;

export default productSlice.reducer;
