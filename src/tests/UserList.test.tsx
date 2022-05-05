import React from 'react'
import { mount, shallow, render } from 'enzyme'
import UserList from '../components/UserList'

describe('Testing User List Component', () => {
  const selectUser = jest.fn()
  const users = [
    {
      id: '1',
      name: 'John Hecker',
      hobbies: [
        {
          id: '2',
          hobby: 'Playing Cricket',
          passion: 'Low',
          year: '1990',
        },
      ],
    },
    {
      id: '2',
      name: 'John Hecker',
      hobbies: [
        {
          id: '2',
          hobby: 'Playing Cricket',
          passion: 'Low',
          year: '1990',
        },
      ],
    },
    {
      id: '3',
      name: 'John Hecker',
      hobbies: [
        {
          id: '2',
          hobby: 'Playing Cricket',
          passion: 'Low',
          year: '1990',
        },
      ],
    },
  ]

  const wrapper = shallow(
    <UserList Users={users} selectedUserId={''} selectUser={selectUser} />,
  )
  it('Renders user Hobbies Component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render All users from database', () => {
    const userContainer = wrapper.find('.userListContainer')
    expect(userContainer.exists()).toBeTruthy()
    expect(userContainer.length).toBe(users.length)
  })

  it('should click on user name and call function for hobbies list', () => {
    wrapper.find('#username_1').simulate('click')
    expect(selectUser).toBeCalledTimes(1)
  })
})
