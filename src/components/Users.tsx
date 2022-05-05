import * as React from 'react'
import { useState, useEffect } from 'react'
import styles from './../styles/Users.module.scss'
import { IUser } from './../interfaces/user'
import UserList from './UserList'

export interface IProps {
  Users: IUser[]
  getAllUsers(): void
  selectedUserId: string
  selectUser(id: string): void
  addUser(id: string): void
}

const Users = (props: IProps) => {
  const [newUserName, setNewUserName] = useState('')
  const { Users, selectedUserId, selectUser, addUser, getAllUsers } = props
  const [error, setError] = useState('')

  const onAddUser = () => {
    if (newUserName !== '') {
      addUser(newUserName)
      setNewUserName('')
    } else {
      setError('Enter user name')
      return
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [getAllUsers])
  return (
    <div>
      <div className={styles.errorDiv}>{error}</div>
      <div className={styles.addUserContainer}>
        <input
          type="text"
          id="newUser"
          placeholder="Enter user name"
          value={newUserName}
          onChange={({
            target: { value },
          }: React.ChangeEvent<HTMLInputElement>) => setNewUserName(value)}
          className={styles.searchContainerField}
        />
        <button
          className={styles.addUserbutton}
          onClick={onAddUser}
          id="addNewbutton"
        >
          Add User
        </button>
      </div>

      <UserList
        Users={Users}
        selectedUserId={selectedUserId}
        selectUser={selectUser}
      />
    </div>
  )
}

export default Users
