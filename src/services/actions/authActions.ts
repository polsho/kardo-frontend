import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserDto } from '../../utils/types';
import { registerUserApi } from '../../utils/reg';


export const register = createAsyncThunk(
    'auth/register',
    async (data: UserDto) => {
      const res = await registerUserApi(data);
    //   setCookie('accessToken', res.accessToken);
    //   localStorage.setItem('refreshToken', res.refreshToken);
      return res.userId;
    }
  );