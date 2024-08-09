import {request} from "./api";
import { ServerResponse, UserDto, UserResponse, UserResponseId } from './types'


type RegResponse = ServerResponse<{
    userId: string;
  }>


export const registerUserApi = (data: UserDto): Promise<any> => {
    return request<RegResponse>('/signup', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
}