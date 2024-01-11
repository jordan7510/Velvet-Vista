import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAdmin: null,
  loading: false,
  error: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    adminSiginStart: (state) => {
      state.loading = true;
    },
    adminSiginSuccess: (state, action) => {
      (state.currentAdmin = action.payload),
        (state.loading = false),
        (state.error = false);
    },
    adminSignFailure: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    adminSignOut: (state, action) => {
      (state.currentAdmin = null),
        (state.loading = false),
        (state.error = false);
    },
  },
});

export const { adminSiginStart, adminSiginSuccess, adminSignFailure,adminSignOut } =
  adminSlice.actions;

export default adminSlice.reducer;
