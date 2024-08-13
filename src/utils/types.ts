import { AppDispatch, RootState } from '../services/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export type TStageStatus = 'Завершен' | 'В ожидании'

export type TStage = {
    status?: TStageStatus
    name: string
    startDate?: string
    endDate?: string
    tasksId?: string
  }

export type TCompetition = {
    type: string
    name: string
    url?: string
    startDate?: string
    endDate?: string
    level?: number
    stages: TStage[]
    description?: string
  }

export enum Directions {
  breaking = 'breaking',
  parkour = 'parkour',
  workout = 'workout',
  kickscootering = 'kickscootering',
  tricking = 'tricking',
  skateboarding = 'skateboarding',
  bmx = 'bmx',
  hipHop = 'hip-hop',
  djIng = 'dj-ing',
  graffiti = 'graffiti'
}

export enum UserType {
  "WATCHER",
  "PARTICIPANT",
  "EXPERT",
  "ADMIN"
}

export type UserDto = {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  type: string | UserType;
  email: string;
  password: string;
  birthday: string;
  country: {id: number, name: string};
  region: {id: number, name: string, country: {id: number, name: string}};
  city: string;
  gender?: string;
}


export type ServerResponse<T> = {
  success: boolean;
} & T;

export type UserResponse = ServerResponse<{
  user: UserDto;
  error: string | null;
}>

export type TMessageErrorResponse = ServerResponse<{
  error: string | null | undefined;
}>

export type wsConnect = {
  wsUrl: string;
};

export type TNews = [
  id: number,
  name: string,
  link: string,
  streamDateTime: string,
  publishedDate: string
]

export type TNewsFeed = {}

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
