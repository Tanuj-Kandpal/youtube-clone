import { createSlice } from "@reduxjs/toolkit";
import { offsetLiveChat } from "../Helpers/helpers";

const ChatSlice = createSlice({
  name: "ChatSlice",
  initialState: {
    messages: [],
  },
  reducers: {
    liveChat: function (state, action) {
      state.messages.splice(offsetLiveChat,1)
      state.messages.unshift(action.payload);
    },
    addChat: function (state, action) {
      state.messages.unshift(action.payload);
    },
  },
});

export const { liveChat, addChat } = ChatSlice.actions;
export default ChatSlice.reducer;
