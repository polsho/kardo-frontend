import {request} from "./api";
import { UserDto, UserResponse, UserResponseId, UserType } from './types'

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
    mode: 'no-cors'
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

export const postRegisterProfileRequest = (user: UserDto): Promise<any> => {
  return request<UserResponseId>(`/signup`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": 'application/json',
    },
  })
}


// name, surname, patronymic, type, email, password, birthday, country, region, city