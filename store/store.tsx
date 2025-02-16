import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
