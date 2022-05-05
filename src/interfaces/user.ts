import { IHobby } from './hobby'

// Define the User type
export interface IUser {
    id: string,
      name: string,
      hobbies: IHobby[]
  }