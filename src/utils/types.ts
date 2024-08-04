
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