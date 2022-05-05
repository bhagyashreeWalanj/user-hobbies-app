import * as React from 'react'
import styles from './../styles/UserList.module.scss'
import { default as classnames } from 'classnames'
import { IUser } from './../interfaces/user'

// Create the interface for UserList
interface UsersListProps {
  Users: IUser[]
  selectedUserId: string
  selectUser(id: string): void
}

const UserList = ({ Users, selectedUserId, selectUser }: UsersListProps) => {
  return (
    <div className={styles.listContainer}>
      <div>
        {Users.map((user) => {
          const isSelected = user.id === selectedUserId
          return (
            <div
              key={user.id}
              id={`username_${user.id}`}
              className={classnames({
                [styles.userListContainer]: true,
                [styles.selected]: isSelected,
              })}
              onClick={() => selectUser(user.id)}
            >
              <p className={styles.name}>{user.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserList
