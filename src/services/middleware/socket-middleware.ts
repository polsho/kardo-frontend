// import {
//   ActionCreatorWithOptionalPayload,
//   ActionCreatorWithPayload,
//   ActionCreatorWithoutPayload,
//   Middleware,
// } from "@reduxjs/toolkit";
// import { TNews, wsConnect } from "../../utils/types"
//
// type TWsActions = {
//   wsConnect: ActionCreatorWithPayload<wsConnect>;
//   wsDisconnect: ActionCreatorWithoutPayload;
//   wsConnecting: ActionCreatorWithoutPayload;
//   wsOpen: ActionCreatorWithoutPayload;
//   wsClose: ActionCreatorWithoutPayload;
//   wsError: ActionCreatorWithOptionalPayload<string | undefined>;
//   wsMessage: ActionCreatorWithPayload<TNews>;
// };
//
// export const socketMiddleware = (wsActions: TWsActions): Middleware => {
//   return store => {
//     let socket: WebSocket | null = null;
//     let reconnectTimeout: number = 0;
//     let isConnected: boolean = false;
//     let wsUrl: string = "";
//     return next => action => {
//       const { dispatch } = store;
//       const { wsConnect, wsDisconnect, wsConnecting, wsOpen, wsClose, wsError, wsMessage } = wsActions;
//
//       if (wsConnect.match(action)) {
//         console.log('connect')
//         wsUrl = action.payload.wsUrl;
//         socket = new WebSocket(wsUrl);
//         isConnected = true;
//         dispatch(wsConnecting());
//       }
//       if (socket) {
//         socket.onopen = event => {
//           console.log("socket.onopen", event);
//           dispatch(wsOpen());
//         };
//         socket.onerror = event => {
//           console.log("socket.onerror", event);
//         };
//         socket.onclose = event => {
//           if (event.code !== 1000) {
//             console.log("socket.onclose error", event);
//             dispatch(wsError(event.code.toString()));
//           }
//         };
//         socket.onmessage = event => {
//           const { data } = event;
//           const parsedData = JSON.parse(data);
//           dispatch(wsMessage(parsedData));
//         };
//       }
//       if (wsDisconnect.match(action) && socket) {
//         console.log('disconnect')
//         clearTimeout(reconnectTimeout);
//         isConnected = false;
//         reconnectTimeout = 0;
//         socket.close(1000, "Работа закончена");
//         dispatch(wsClose());
//       }
//       next(action);
//     };
//   };
// };