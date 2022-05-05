import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { IUser } from '../interfaces/user';
import UserHobbiesList from '../components/UserHobbiesList';
import { IHobby } from '../interfaces/hobby';


describe('Testing User Hobbies Component', () => {
  const addHobby = () => {}
  const removeHobby = jest.fn();
  const user : IUser ={
    id: '1',
    name: '22',
    hobbies: [{
      id: '2',
      hobby: 'Playing Cricket',
      passion: 'Low',
      year: '1990'
    }]
  }
  const hobbies:IHobby[]=[
    {
      id: '1',
      hobby: 'Playing Cricket',
      passion: 'Low',
      year: '1990'
    },
    {
      id: '2',
      hobby: 'Playing Cricket',
      passion: 'Low',
      year: '1990'
    }
  ]
  const wrapper = shallow(
    <UserHobbiesList hobbies={hobbies} removeHobby={removeHobby} />
  );
  
  it('should Renders user Hobbies Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should remove hobby by Id', () => {
    wrapper.find('#deleteBtn_1').simulate('click');
   expect(removeHobby).toBeCalledTimes(1);

  });

  
});




