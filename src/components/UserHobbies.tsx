import * as React from 'react'
import { useState } from 'react'
import styles from './../styles/UserHobbies.module.scss'
import classnames from 'classnames'

import { IUser } from '../interfaces/user'
import { IHobby, PassionLevel } from '../interfaces/hobby'
import UserHobbiesList from './UserHobbiesList'

export interface UserHobbiesProps {
  user: IUser
  hobbies: IHobby[]
  addHobby(hobby: IHobby): void
  removeHobby(hobbyId: string): void
}
const UserHobbies = ({
  user,
  hobbies,
  addHobby,
  removeHobby,
}: UserHobbiesProps) => {
  const [level, setLevel] = useState(PassionLevel.Low)
  const [hobby, setHobby] = useState('')
  const [year, setYear] = useState('')
  const [error, setError] = useState('')

  const handleNewHobby = () => {
    if (
      hobbies.find((h) => h.hobby.toLowerCase() === hobby.trim().toLowerCase())
    ) {
      setError(`The hobby "${hobby}" already exists in the hobbies list`)
      return
    } else if (hobby.trim() === '') {
      setError('Please enter your hobby')
      return
    } else if (year.trim() === '') {
      setError('Please enter year')
      return
    } else if (!/^[0-9]+$/.test(year)) {
      setError('Please enter correct year')
      return
    } else {
      addHobby({
        id: (Math.floor(Math.random() * 100) + 8).toString(),
        hobby: hobby,
        passion: level,
        year: year.toString(),
      })
      setHobby('')
      setYear('')
      setError('')
    }
  }

  if (!user) {
    return (
      <div className={classnames(styles.container, styles.containerEmpty)}>
        <div className={styles.emptyContainer}>
          <span className={styles.noUserDiv}>No Data Selected !!</span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.errorDiv}>{error}</div>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Passion-Level : </label>
        <select
          className={styles.inputContainerField}
          value={level}
          onChange={({ target: { value } }) => {
            setLevel(value as PassionLevel)
            setError('')
          }}
        >
          {Object.values(PassionLevel).map((lvl) => (
            <option key={lvl} value={lvl}>
              {lvl}
            </option>
          ))}
        </select>
        <label className={styles.inputLabel}>Hobby:</label>
        <input
          type="text"
          value={hobby}
          id="hobby"
          onChange={({
            target: { value },
          }: React.ChangeEvent<HTMLInputElement>) => setHobby(value)}
          placeholder="Enter user hobby"
          className={styles.inputContainerField}
        />
        <label className={styles.inputLabel}>Year : </label>
        <input
          type="text"
          maxLength={4}
          value={year}
          id="year"
          onChange={({
            target: { value },
          }: React.ChangeEvent<HTMLInputElement>) => setYear(value)}
          placeholder="Enter year"
          className={styles.inputContainerField}
        />
        <button className={styles.addHobbybutton} onClick={handleNewHobby}>
          Add Hobby
        </button>
      </div>
      <div className={styles.itemHeader}>
        <span>Passion-Level</span>
        <span>Hobby</span>
        <span>Year</span>
      </div>
      <UserHobbiesList hobbies={hobbies} removeHobby={removeHobby} />
    </div>
  )
}

export default UserHobbies
