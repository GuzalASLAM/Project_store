import { createSlice } from "@reduxjs/toolkit";
import { fetchAllItems, fetchAllCategories } from "./asycnc-actions";

const initialState = {
  category: null,
  items: [],
  isLoading: false,
  cart: [],
  error: null,
  categories: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setItems: (state, { payload }) => {
      state.items = payload;
    },
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllItems.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    });
    builder.addCase(fetchAllItems.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllCategories.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload;
    });
    builder.addCase(fetchAllCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setItems, setCategory, setIsLoading } = shopSlice.actions;

export default shopSlice.reducer;
