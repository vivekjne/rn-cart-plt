import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
const API_URL =
  "https://my-json-server.typicode.com/benirvingplt/products/products";

const initialState = {
  products: [],
  loading: false,
  error: false,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkAPI) => {
    const response = await Axios.get(API_URL);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        // Add user to the state array

        state.loading = true;
        state.error = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // Add user to the state array
        state.products = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // Add user to the state array

        state.loading = false;
        state.error = true;
      });
  },
});

export default productsSlice.reducer;
