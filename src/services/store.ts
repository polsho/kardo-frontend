import { configureStore } from '@reduxjs/toolkit';
import loginReducer from "./reducers/loginSlice";
import { socketMiddleware } from './middleware/socket-middleware'
import { urlApi } from '../utils/api'
import wsSliceBroadcasts, {wsCloseBroadcasts, wsErrorBroadcasts, wsOpenBroadcasts, wsMessageBroadcasts} from "./reducers/wsBroadcastsSlice";
import { wsConnectingBroadcasts, wsConnectBroadcasts, wsDisconnectBroadcasts } from './actions/actionsBroadcasts'


const wsActionBroadcasts = {
  wsConnect: wsConnectBroadcasts,
  wsDisconnect: wsDisconnectBroadcasts,
  wsConnecting: wsConnectingBroadcasts,
  wsOpen: wsOpenBroadcasts,
  wsClose: wsCloseBroadcasts,
  wsMessage: wsMessageBroadcasts,
  wsError: wsErrorBroadcasts,
};

const broadcastsMiddleware  = socketMiddleware(wsActionBroadcasts);

export const store = configureStore({
  reducer: {
    loginSlice: loginReducer,
    wsBroadcasts: wsSliceBroadcasts,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: urlApi,
      },
    }).concat(broadcastsMiddleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// export const useDispatch: () => AppDispatch = () => dispatchHook();
// export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;