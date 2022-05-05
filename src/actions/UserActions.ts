// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Import Character Typing
import { IUserState } from '../reducers/UserReducer';
import { IUser } from '../interfaces/user';
import {IHobby } from '../interfaces/hobby';
import UserActionTypes from './constants';

// Please Refer mock data in store folder: _mock.js
const AXIOS_URL: string = "https://624b52c271e21eebbcf0b4ba.mockapi.io/users/";


// Interface for Get All Action Type
export interface IGetAllUsers {
  type: UserActionTypes.GET_ALL;
  Users: IUser[];
}

export interface IAddUserAction {
  type: UserActionTypes.ADD_USER,
  userName: string
}

export interface ISelectUserAction {
  type: UserActionTypes.SELECT_USER,
  userId: string
}

export interface IAddHobbyAction {
  type: UserActionTypes.ADD_HOBBY,
  hobby: IHobby
}

export interface IRemoveHobbyAction {
  type: UserActionTypes.REMOVE_HOBBY,
  hobbyId: string
}


export type UserActions = IGetAllUsers 
| ISelectUserAction | IAddUserAction | IAddHobbyAction | IRemoveHobbyAction;



/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllUsers: ActionCreator<
  ThunkAction<Promise<any>, IUserState, null, IGetAllUsers>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(AXIOS_URL);
      dispatch({
        Users: response.data,
        type: UserActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export interface IUsersService {
  createUser(userName: string): IUser
  addNewHobby(selectedId: string,hobby: IHobby) : IHobby
  removeHobby(selectedId: string,hobbyId: string) : IHobby
}

export const usersService: IUsersService = {
  
   createUser(userName: string):IUser {
        const input ={
          id: (Math.floor(Math.random() * 100) + 8).toString(),
          name: userName,
          hobbies: []
        }
        axios.post(AXIOS_URL, input);
        return (input)
    },

    addNewHobby(selectedId: string,hobby: IHobby):IHobby{
        axios.get(AXIOS_URL+`${selectedId}`)
      .then(res => {
        const data = res.data;
        data["hobbies"].push(hobby); 
        const finalData = data;       
        axios({
          method: 'put',
          url: AXIOS_URL+`${selectedId}`,
          data: finalData
       }).catch(e=>console.log(e));
      });

        return hobby;
    },
    removeHobby(selectedId: string,hobbyId: string):IHobby {
      const result = {
        id: selectedId,
        hobby: "string",
        passion: 'low',
        year: '1222'
      };

       axios.get(AXIOS_URL+`${selectedId}`)
      .then(res => {
        const data = res.data;

        const findHobbyById = data.hobbies.filter((u: any) => {
          return u.id !== hobbyId
        })
        data["hobbies"] = findHobbyById; 
        const finalData = data;       
        axios({
          method: 'put',
          url: AXIOS_URL+`${selectedId}`,
          data: finalData
      }).catch(e=>console.log(e));


      });

        return (result)
      
   
  }
}

export const addUser =  (userName: string) : IAddUserAction => {
  return {
    type: UserActionTypes.ADD_USER,
    userName
  }
}

export const selectUser =  (userId: string) : ISelectUserAction => {
  return {
    type: UserActionTypes.SELECT_USER,
    userId
  }
}

export const addHobby =  (hobby: IHobby): IAddHobbyAction => {
  return {
    type: UserActionTypes.ADD_HOBBY,
    hobby
  }
}

export const removeHobby =  (hobbyId: string) : IRemoveHobbyAction => {
  return {
    type: UserActionTypes.REMOVE_HOBBY,
    hobbyId
  }
}