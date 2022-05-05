import { connect } from 'react-redux';
import { IAppState } from '../store/Store';
import {
    addHobby,
    removeHobby
  } from '../actions/UserActions';
import { IUser } from '../interfaces/user';
import {IUserState} from '../reducers/UserReducer';
import { IHobby } from '../interfaces/hobby';
import UserHobbies from './../components/UserHobbies';


const findUserById = (users: IUser[]) => (userId: string) => users.find(u => u.id === userId)
export const getSelectedUserId = (state: IUserState) => state.selectedUserId
export const getUsers = (state: IUserState) => state.Users
export const getSelectedUser = (state: IUserState) => findUserById(getUsers(state))(getSelectedUserId(state))
export const getSelectedUserHobbies = (state: IUserState) => getSelectedUserId(state) ? getSelectedUser(state)?.hobbies : []



const mapStateToProps = (store: IAppState) => ({
    user: getSelectedUser(store.Userstate),
     hobbies: getSelectedUserHobbies(store.Userstate),
   })
   
   const mapDispatchToProps = (dispatch: any) => {
     return {
       addHobby: (hobby: IHobby) => dispatch(addHobby(hobby)),
       removeHobby: (hobbyId: string) => dispatch(removeHobby(hobbyId))
     }
   }
   
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps,
 )(UserHobbies as any)