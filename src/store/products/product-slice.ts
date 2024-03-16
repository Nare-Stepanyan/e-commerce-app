import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../type";
import {
  getProducts,
  createProduct,
  getProductById,
  getMaxPrice,
  getMinPrice,
} from "./actions";

type ProductState = {
  products: Product[];
  minPrice: number | null;
  maxPrice: number | null;
  product: Product | null;
  isLoading: boolean;
};

const initialState: ProductState = {
  products: [],
  product: null,
  isLoading: false,
  minPrice: null,
  maxPrice: null,
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
    getPriceRange: (state, action) => {
      const { products } = action.payload;
      state.minPrice = getMinPrice(products);
      state.maxPrice = getMaxPrice(products);
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

export const { setProducts, setProduct, getPriceRange } = productSlice.actions;

export default productSlice.reducer;
