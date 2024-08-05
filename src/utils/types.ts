
export type TStageStatus = 'Завершен' | 'В ожидании'

export  type TStage = {
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
