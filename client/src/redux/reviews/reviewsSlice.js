import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allReviews: null,
  loading: false,
  error: false,
};

const reviewsSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    reviewGet: (state, action) => {
      state.allReviews = action.payload;
      state.loading = true;
      state.error = true;
    },
    reviewEdit: (state, action) => {
      (state.loading = false), (state.error = false);
    },
    reviewDelete: (state, action) => {
      (state.loading = false), (state.error = false);
    },
  },
});

export const { reviewGet, reviewEdit, reviewDelete } = reviewsSlice.actions;

export default reviewsSlice.reducer;
