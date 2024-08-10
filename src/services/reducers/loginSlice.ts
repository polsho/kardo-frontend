import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { getLoginRequest, postRegisterProfileRequest } from '../../utils/auth'
import { TMessageErrorResponse, UserResponse, UserResponseId } from '../../utils/types'

type TInitialState = {
  isLoading: boolean,
  error: SerializedError | null;
  status: string;
  userId: string | null;
}

export const initialState: TInitialState = {
  isLoading: false,
  error: null,
  status: '',
  userId: localStorage.getItem('userId'),
}

export const fetchLoginResult = createAsyncThunk(
  `login/fetchUserIdResult`,
  getLoginRequest
)

export const fetchRegisterProfileResult = createAsyncThunk(
  `register/fetchAccessTokenResult`,
  postRegisterProfileRequest
);


const loginSlice = createSlice({
  name: 'userSession',
  initialState,
  reducers: {
    userLogout: (state) => {
      state.userId = ''
      localStorage.setItem('userId', '')
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLoginResult.pending.type, (state: TInitialState) => {
        state.isLoading = true
        console.log(1);
        state.error = null
      })
      .addCase(fetchLoginResult.fulfilled.type, handleLogin)
      .addCase(fetchLoginResult.rejected.type, (state: TInitialState, action: PayloadAction<UserResponse>) => {
        // state.error = action.payload.error ? Error(action.payload.error) : null
        console.log(action.payload);
        console.log(3);
        state.isLoading = false
      })
      .addCase(fetchRegisterProfileResult.pending.type, (state: TInitialState) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRegisterProfileResult.fulfilled.type, handleLogin)
      .addCase(fetchRegisterProfileResult.rejected.type, (state:TInitialState, action: PayloadAction<TMessageErrorResponse>) => {
        // state.error = action.payload.message ? Error(action.payload.message) : null;
        state.isLoading = false;
      })
  }

})

function handleLogin(state: TInitialState, action: PayloadAction<UserResponseId>) {
  // state.userId = action.payload.userId
  state.isLoading = false
  console.log(action.payload);
  console.log(2);
  // localStorage.setItem('userId', action.payload.userId)
  //Комментами помечены поля, которые непонятно, в каком виде будут приходить с сервера и под каким названием
}

export const { userLogout } = loginSlice.actions

export default loginSlice.reducer