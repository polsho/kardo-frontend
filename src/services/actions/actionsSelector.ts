import { createAsyncThunk } from "@reduxjs/toolkit";
import {RootState} from "../store";
import { getUserApi } from "../../utils/auth";
import { setUser, setAuthChecked } from "../reducers/loginSlice";

export const broadcastsSelector = (store: RootState) => store.wsBroadcasts

export const selectUser = (store: RootState) => store.loginSlice.user
export const selectIsAuthChecked = (store: RootState) => store.loginSlice.isAuthChecked


export const checkUserAuth = createAsyncThunk(
    'auth/checkUser',
    async (_, { dispatch }) => {
        const userId = localStorage.getItem('userId')
      if (userId) {
        getUserApi(userId)
          .then((res) => dispatch(setUser(res)))
          .catch(() => {
            localStorage.removeItem('userId');
          })
          .finally(() => dispatch(setAuthChecked(true)));
      } else {
        dispatch(setAuthChecked(true));
      }
    }
  );