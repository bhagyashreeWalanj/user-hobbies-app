import * as React from 'react'
import Users from './../containers/UsersContainer'
import UserHobbies from './../containers/UserHobbyContainer'
import styles from './../styles/app.module.scss'
import { Provider } from 'react-redux'
import configureStore from '../store/Store'

const store = configureStore()

const App: React.FunctionComponent<{}> = () => {
  return (
    <Provider store={store}>
      <div className={styles.heading}>USER HOBBIES LIST</div>
      <div className={styles.container}>
        <Users />
        <UserHobbies />
      </div>
    </Provider>
  )
}

export default App
