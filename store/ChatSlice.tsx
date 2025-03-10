import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { offsetLiveChat } from "../Helpers/helpers";

type Message = {
  message: string;
  author: string;
};

type ChatState = {
  messages: Message[];
};

const initialState: ChatState = {
  messages: [], // ✅ Explicitly typed as an array of Message objects
};

const ChatSlice = createSlice({
  name: "ChatSlice",
  initialState,
  reducers: {
    liveChat: function (state, action: PayloadAction<Message>) {
      state.messages.splice(offsetLiveChat, 1);
      state.messages.unshift(action.payload);
    },
    addChat: function (state, action) {
      state.messages.unshift(action.payload);
    },
  },
});

export const { liveChat, addChat } = ChatSlice.actions;
export default ChatSlice.reducer;
