import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cacheResults",
  initialState: {},
  reducers: {
    cacheResults: function (state, action) {
      //* First approach
      // Object.assign(state, action.payload);
      //* Second Approach
      return { ...state, ...action.payload };
    },
  },
});

export default cacheSlice.reducer;
export const { cacheResults } = cacheSlice.actions;
