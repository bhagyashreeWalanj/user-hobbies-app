import styles from './../styles/UserHobbiesList.module.scss'
import { IHobby } from './../interfaces/hobby'
import { MdDelete } from 'react-icons/md'

// An Interface for User Hobbies List
export interface UserHobbiesListProps {
  hobbies: IHobby[]
  removeHobby(hobbyId: string): void
}

const UserHobbiesList = ({ hobbies, removeHobby }: UserHobbiesListProps) => {
  return (
    <div className={styles.container}>
      {hobbies.length === 0 ? (
        <div className={styles.noDataDiv}>No data Found!</div>
      ) : (
        hobbies.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              <span>{item.passion}</span>
              <span>{item.hobby}</span>
              <span>Since {item.year}</span>
              <MdDelete
                className={styles.deleteBtn}
                onClick={() => removeHobby(item.id)}
                name="delete"
                id={`deleteBtn_${item.id}`}
              />
            </div>
          )
        })
      )}
    </div>
  )
}

export default UserHobbiesList
