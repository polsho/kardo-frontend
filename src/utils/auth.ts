import {request} from "./api";
import { UserResponse, UserType } from './types'

type TLoginRequest = {
  email: string;
  password: string;
}


export const getLoginRequest = ({email, password}: TLoginRequest): Promise<any> => {
  let query: string = "email="+email+"&password="+password
  return request<UserResponse>(`/login?`+query, {
    method: "GET",
    headers: {
      "Content-Type": 'application/json',
    },
    // mode: 'no-cors'
  })
}

export type TProfileRequest = {
  name: string;
  surname: string;
  patronymic: string;
  type: string | UserType;
  email: string;
  password: string;
  birthday: string;
  country: string;
  region: string;
  city: string;
}

export const postRegisterProfileRequest = ({name, surname, patronymic, type, email, password, birthday, country, region, city}: TProfileRequest): Promise<any> => {
  return request<UserResponse>(`/signup`, {
    method: "POST",
    body: JSON.stringify({name, surname, patronymic, type, email, password, birthday, country, region, city}),
    headers: {
      "Content-Type": 'application/json',
    },
  })
}
