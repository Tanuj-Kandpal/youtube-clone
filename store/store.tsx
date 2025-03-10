import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
import cacheSlice from "./cacheSlice";
import ChatSlice from "./ChatSlice";
export const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice,
    cache: cacheSlice,
    chat: ChatSlice,
  },
});
// export type RootState = ReturnType<typeof store.getState>;

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

// export default store;
