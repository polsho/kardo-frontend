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

export type UserDto = {
  email: string;
  name: string;
}

export type ServerResponse<T> = {
  status: number;
} & T;

export type UserResponse = ServerResponse<{
  user: UserDto;
  error: string | null;
}>

export type UserResponseId = ServerResponse<{
  user: UserDto;
  userId: string;
}>;

export type TMessageErrorResponse = ServerResponse<{
  error: string | null | undefined;
}>

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
