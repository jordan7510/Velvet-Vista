import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allServices: null,
  loading: false,
  error: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    getAllServices: (state,action) => {
      state.allServices = action.payload;
    },
    editServiceStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    editServiceSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    editServiceFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteServiceStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteServiceSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    deleteServiceFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getAllServices,
  editServiceStart,
  editServiceSuccess,
  editServiceFailure,
  deleteServiceStart,
  deleteServiceSuccess,
  deleteServiceFailure,
} = serviceSlice.actions;

export default serviceSlice.reducer;
