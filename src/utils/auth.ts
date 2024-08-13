import checkResponse, {request, urlApi} from "./api";
import { UserDto, UserType } from './types'

export type TLoginRequest = {
  email: string;
  password: string;
}


export const getLoginRequest = (data: TLoginRequest): Promise<any> => {
  return request<UserDto>('/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
  })
}

export const getUserApi = (userId: string) => {
  return request<UserDto>(`/users/${userId}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
  })
}

export const updateUserApi = (data: UserDto): Promise<any> => {
  return request<UserDto>(`/users/${data.id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
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

export const postRegisterProfileRequest = (user: Omit<UserDto, 'id'>): Promise<any> => {
  return request<UserDto>(`/signup`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": 'application/json',
    },
  })
}