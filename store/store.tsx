import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
import cacheSlice from "./cacheSlice";
const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice,
    cache: cacheSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
