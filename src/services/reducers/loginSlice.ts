import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { getLoginRequest, postRegisterProfileRequest, updateUserApi } from '../../utils/auth'
import { TMessageErrorResponse, UserDto, UserResponse } from '../../utils/types'

type TInitialState = {
  isLoading: boolean
  error: SerializedError | null
  status: string
  user: UserDto | null
  userId: string | null
  isAuthChecked: boolean
}

export const initialState: TInitialState = {
  isLoading: false,
  error: null,
  status: '',
  user: null,
  userId: localStorage.getItem('userId'),
  isAuthChecked: false
}

export const fetchLoginResult = createAsyncThunk(`login/fetchUserIdResult`, getLoginRequest)

export const fetchRegisterProfileResult = createAsyncThunk(
  `register/fetchAccessTokenResult`,
  postRegisterProfileRequest
)

export const fetchUpdateUserResult = createAsyncThunk(
  `user/fetchUpdateUserResult`,
  updateUserApi
)


const loginSlice = createSlice({
  name: 'userSession',
  initialState,
  reducers: {
    setAuthChecked: (state, action: PayloadAction<boolean>) => {
      state.isAuthChecked = action.payload;
    },
    setUser: (state, action: PayloadAction<UserDto | null>) => {
      state.user = action.payload;
    },
    userLogout: state => {
      state.userId = ''
      localStorage.setItem('userId', '')
    }
  },
  selectors: {
    selectUser: state => state.user,
    selectIsAuthChecked: state => state.isAuthChecked
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLoginResult.pending.type, (state: TInitialState) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchLoginResult.fulfilled.type, handleLogin)
      .addCase(
        fetchLoginResult.rejected.type,
        (state: TInitialState, action: PayloadAction<UserResponse>) => {
          // state.error = action.payload.error ? Error(action.payload.error) : null
          state.isLoading = false
        }
      )
      .addCase(fetchRegisterProfileResult.pending.type, (state: TInitialState) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchRegisterProfileResult.fulfilled.type, handleLogin)
      .addCase(
        fetchRegisterProfileResult.rejected.type,
        (state: TInitialState, action: PayloadAction<TMessageErrorResponse>) => {
          // state.error = action.payload.message ? Error(action.payload.message) : null;
          state.isLoading = false
        }
      )
      .addCase(fetchUpdateUserResult.fulfilled.type, (state: TInitialState, action: PayloadAction<UserDto>) => {
        state.user = action.payload
      })
  }
})

function handleLogin(state: TInitialState, action: PayloadAction<UserDto>) {
  state.userId = action.payload.id.toString()
  state.user = action.payload
  state.isLoading = false
  state.isAuthChecked = true;
  localStorage.setItem('userId', state.userId)
}

export const { setAuthChecked, setUser, userLogout } = loginSlice.actions

export default loginSlice.reducer
