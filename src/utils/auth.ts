import {request} from "./api";
import { UserResponse } from './types'

type TLoginRequest = {
  email: string;
  password: string;
}

export const postLoginRequest = ({email, password}: TLoginRequest): Promise<any> => {
  return request<UserResponse>(`/login`, {
    method: "GET",
    body: JSON.stringify({email, password}),
    headers: {
      "Content-Type": 'application/json',
    },
  })
}