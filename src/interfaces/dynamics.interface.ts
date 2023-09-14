
export interface Dynamics {
    name: string
    image: string
    type: DynamicType
    date: string
    status: DynamicStatus
    id: string
  }


export interface DynamicsCardProps extends Dynamics {
    onClick: () => void
  }


export type DynamicStatus = 'active' | 'inactive'
export type DynamicType = 'Bingo' | 'Millonario' | 'Bingo Tradicional'