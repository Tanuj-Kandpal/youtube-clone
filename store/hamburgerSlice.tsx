import { createSlice } from "@reduxjs/toolkit";

const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState: {
    isModelOpen: true,
  },
  reducers: {
    hamburgerModal: function (state) {
      state.isModelOpen = !state.isModelOpen;
    },
    hamburgerModalOff: function (state) {
      state.isModelOpen = false;
    },
  },
});

export default hamburgerSlice.reducer;
export const { hamburgerModal, hamburgerModalOff } = hamburgerSlice.actions;
