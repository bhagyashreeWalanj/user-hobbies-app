import { IAppState } from './../store/Store';
import {
    getAllUsers,
    selectUser,
    addUser
  } from '../actions/UserActions';
  import { connect } from 'react-redux';
import Users from './../components/Users';


// Grab the Users from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {
    Users: store.Userstate.Users,
    selectedUserId:store.Userstate.selectedUserId,
  };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
      selectUser: (userId: string) => dispatch(selectUser(userId)),
     getAllUsers: () => dispatch(getAllUsers()),
      addUser: (userName: string) => dispatch(addUser(userName))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Users);