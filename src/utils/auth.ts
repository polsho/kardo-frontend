import {request} from "./api";
import { UserResponse } from './types';

type TLoginRequest = {
  email: string;
  password: string;
}


export const getLoginRequest = ({email, password}: TLoginRequest): Promise<UserResponse> => {
  let query: string = "email="+email+"&password="+password
  return request<UserResponse>(`/login?`+query, {
    method: "GET",
    headers: {
      "Content-Type": 'application/json',
    },
  })
}
