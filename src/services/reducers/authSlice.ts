import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserDto } from '../../utils/types';
import { register } from '../actions/authActions';

type TAuthState = {
    user: UserDto | null;
    isAuthChecked: boolean;
    errorText: string;
  };
  
  export const initialState: TAuthState = {
    user: null,
    isAuthChecked: false,
    errorText: ''
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setAuthChecked: (state, action: PayloadAction<boolean>) => {
        state.isAuthChecked = action.payload;
      },
      setUser: (state, action: PayloadAction<UserDto>) => {
        state.user = action.payload;
      }
    },
    selectors: {
      selectUser: (state) => state.user,
      selectIsAuthChecked: (state) => state.isAuthChecked,
      selectErrorText: (state) => state.errorText
    },
    extraReducers: (builder) => {
      builder
        .addCase(register.fulfilled, (state, action) => {
        //   state.user = action.payload;
          state.isAuthChecked = true;
          state.errorText = '';
        })
        .addCase(register.rejected, (state, action) => {
          state.errorText = action.error.message || '';
        })
    }
  });
  
  export const { setAuthChecked, setUser } = authSlice.actions;
  
  export const { selectUser, selectIsAuthChecked, selectErrorText } =
    authSlice.selectors;
  
  export const reducer = authSlice.reducer;
  