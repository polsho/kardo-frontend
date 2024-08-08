import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { postLoginRequest } from '../../utils/auth'
import { TMessageErrorResponse, UserResponseId } from '../../utils/types'

type TInitialState = {
  isLoading: boolean,
  error: SerializedError | null;
  success: boolean;
  userId: string | null;
  message: string | null;
}

export const initialState: TInitialState = {
  isLoading: false,
  error: null,
  success: false,
  userId: localStorage.getItem("userId"),
  message: ""
};

export const fetchLoginResult = createAsyncThunk(
  `login/fetchUserIdResult`,
  postLoginRequest
);


const loginSlice = createSlice({
  name: 'userSession',
  initialState,
  reducers: {
    wsUserLogout: (state) => {
      state.userId = "";
      localStorage.setItem('userId', "");
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLoginResult.pending.type, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLoginResult.fulfilled.type, (state: TInitialState, action: PayloadAction<UserResponseId>) => {
        state.userId = action.payload.userId;
        state.isLoading = false;
        localStorage.setItem('userId', action.payload.userId);
    })
      .addCase(fetchLoginResult.rejected.type, (state, action: PayloadAction<TMessageErrorResponse>) => {
        state.error = action.payload.error ? Error(action.payload.error) : null;
        state.isLoading = false;
      })
  }

});

export const {wsUserLogout} = loginSlice.actions;

export default loginSlice.reducer;