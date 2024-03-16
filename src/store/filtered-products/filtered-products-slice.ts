import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../type";
import { filterByPrice, filterBySearch, filterBySort } from "./actions";

type FilteredProductsState = {
  filteredProducts: Product[];
};

const initialState: FilteredProductsState = {
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterBySearch: (state, action) => {
      const { products, search } = action.payload;
      const filtered = filterBySearch(products, search);
      state.filteredProducts = filtered;
    },
    setFilterBySort: (state, action) => {
      const { products, sort } = action.payload;
      const filtered = filterBySort(products, sort);
      state.filteredProducts = filtered;
    },
    setFilterByPrice: (state, action) => {
      const { products, price } = action.payload;
      const filtered = filterByPrice(products, price);
      state.filteredProducts = filtered;
    },
  },
});

export const { setFilterBySearch, setFilterByPrice, setFilterBySort } =
  filterSlice.actions;

export default filterSlice.reducer;
