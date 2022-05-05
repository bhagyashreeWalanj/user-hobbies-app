import App from '../components/App'
import Users from '../containers/UsersContainer'
import { shallow } from 'enzyme'
import UserHobby from '../containers/UserHobbyContainer'

describe('render all components', () => {
  const app = shallow(<App />)

  it('should match the snapshot', () => {
    expect(app).toMatchSnapshot()
  })
  it('App Component contains Users component', () => {
    expect(app.contains(<Users />)).toBe(true)
  })
  it('App Component contains Users Hobbies component', () => {
    expect(app.contains(<UserHobby />)).toBe(true)
  })
  it('should open User Hobbies Page without error', () => {
    expect(app.find('.heading').text()).toContain('USER HOBBIES LIST')
  })
})
