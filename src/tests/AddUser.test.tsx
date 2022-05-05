import React from 'react'
import { mount, shallow, render } from 'enzyme'
import Users, { IProps } from '../components/Users'

describe('Testing Add New User Component', () => {
  const getAllUsers = () => {}
  const selectUser = () => {}
  const addUser = jest.fn()
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
  ]
  const props: IProps = {
    Users: users,
    getAllUsers: getAllUsers,
    selectedUserId: '',
    selectUser: selectUser,
    addUser: addUser,
  }

  const wrapper = shallow(<Users {...props} />)
  const container = wrapper.find('#newUser')

  it('Renders Users Component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should display error on empty user field click', () => {
    container.simulate('change', { target: { value: '' } })
    wrapper.find('#addNewbutton').simulate('click')
    const errorDiv = wrapper.find('.errorDiv')
    const errorText = errorDiv.text()
    expect(errorText).toEqual('Enter user name')
  })

  it('should add user in database', () => {
    container.simulate('change', { target: { value: 'John' } })
    wrapper.find('#addNewbutton').simulate('click')
    expect(addUser).toBeCalledTimes(1)
  })
})
