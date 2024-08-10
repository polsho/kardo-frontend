import {createSlice} from "@reduxjs/toolkit";

type TInitialState = {
  wsConnected: boolean;
  news: [];
  error?: Event;
}

export const initialState: TInitialState = {
  wsConnected: false,
  news: [],
}

const wsSliceBroadcasts = createSlice({
  name: "wsOrders",
  initialState,
  reducers: {
    wsOpenBroadcasts: (state) => {
      state.wsConnected = true;
      state.error = undefined;
    },
    wsCloseBroadcasts: () => {
      return initialState;
    },
    wsErrorBroadcasts: (state, action) => {
      state.wsConnected = false;
      state.error = action.payload;
    },
    wsMessageBroadcasts: (state, action) => {
      state.wsConnected = true;
      state.news = action.payload;
      state.error = undefined;
    },
  },
})

export default wsSliceBroadcasts.reducer;
export const {wsOpenBroadcasts, wsCloseBroadcasts, wsErrorBroadcasts, wsMessageBroadcasts} = wsSliceBroadcasts.actions;