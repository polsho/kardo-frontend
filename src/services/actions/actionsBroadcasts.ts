import { createAction } from "@reduxjs/toolkit";
import {wsConnect } from "../../utils/types";

export const wsConnectBroadcasts = createAction<wsConnect>("WS_CONNECT_FEED");
export const wsDisconnectBroadcasts = createAction("WS_DISCONNECT_FEED");
export const wsConnectingBroadcasts = createAction("WS_CONNECTING_FEED");