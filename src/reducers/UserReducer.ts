// Import Reducer type
import { Reducer } from 'redux';
import { UserActions } from '../actions/UserActions';
import { usersService } from '../actions/UserActions';
import UserActionTypes from '../actions/constants';
import { IUser } from '../interfaces/user';


// Define the Character State
export interface IUserState {
  Users: IUser[]
  selectedUserId: string
}

// Define the initial state
const initialUserstate: IUserState = {
  Users: [],
  selectedUserId: '',
};

export const characterReducer: Reducer<IUserState, UserActions> = (
  state = initialUserstate,
  action
) => {
  switch (action.type) {
    case UserActionTypes.GET_ALL: {
      return {
        ...state,
        Users: action.Users,
      };
    }
    case UserActionTypes.SELECT_USER: {

      return {
        ...state,
        selectedUserId: action.userId
      }
    }
    case UserActionTypes.ADD_USER: {
      return {
        ...state,
        Users: [
          ...state.Users,
          usersService.createUser(action.userName)
        ],
      }
    }
    case UserActionTypes.ADD_HOBBY: {
      return {
        ...state,
        users: state.Users.map(u => {
          if (u.id !== state.selectedUserId) {
            return u
          }

          u.hobbies = [...u.hobbies, action.hobby]
          usersService.addNewHobby(state.selectedUserId,action.hobby)

          return u
        })
      }
    }
    case UserActionTypes.REMOVE_HOBBY: {
      return {
        ...state,
        users: state.Users.map(u => {
          if (u.id !== state.selectedUserId) {
            return u
          }

          u.hobbies = [...u.hobbies.filter(h => h.id !== action.hobbyId)]
          usersService.removeHobby(state.selectedUserId,action.hobbyId)
          return u
        })
      }
    }
    default:
      return state;
  }
};