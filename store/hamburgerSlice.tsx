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
  },
});

export default hamburgerSlice.reducer;
export const { hamburgerModal } = hamburgerSlice.actions;
