import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allAppointments: null,
};

const appointmentsSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    getAppointments: (state, action) => {
      state.allAppointments = action.payload;
    },
  },
});

export const { getAppointments } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
