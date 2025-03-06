import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
import cacheSlice from "./cacheSlice";
import ChatSlice from "./ChatSlice";
const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice,
    cache: cacheSlice,
    chat: ChatSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
