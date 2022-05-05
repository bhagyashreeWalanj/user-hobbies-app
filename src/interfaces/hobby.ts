export enum PassionLevel {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High',
    VeryHigh = 'Very-High',
  }
  
  export interface IHobby {
    id: string
    hobby: string
    passion: PassionLevel | string
    year: string
  }