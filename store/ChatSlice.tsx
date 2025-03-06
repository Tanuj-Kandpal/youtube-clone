import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "ChatSlice",
  initialState: {
    messages: [],
  },
  reducers: {
    addChat: function (state, action) {
      state.messages.push(action.payload);
    },
  },
});

export const { addChat } = ChatSlice.actions;
export default ChatSlice.reducer;
