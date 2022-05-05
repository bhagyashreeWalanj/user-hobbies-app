import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Users, { IProps } from '../components/Users';
import UserHobbies from '../components/UserHobbies';
import { IUser } from '../interfaces/user';


 describe('Testing Add Hobby Component', () => {
    const addHobby = jest.fn();
    const removeHobby = jest.fn();
  const users:IUser ={
    id: '1',
    name: 'John Hecker',
    hobbies: [{
      id: '2',
      hobby: 'Playing Cricket',
      passion: 'Low',
      year: '1990'
    }]
  };
  

  const wrapper = shallow(<UserHobbies user={users} hobbies={[]} addHobby={addHobby} removeHobby={removeHobby} />);
    const hobbyInput = wrapper.find('#hobby')
    const yearInput = wrapper.find('#year');


  it('Renders user Hobbies Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display error on empty Hobby field', () => {
    hobbyInput.simulate('change', { target: { value: '' } });
    wrapper.find('.addHobbybutton').simulate('click');
    const errorDiv = wrapper.find('.errorDiv')
    const errorText = errorDiv.text();
    expect(errorText).toEqual('Please enter your hobby');
  });

  it('should display error on empty Year input field', () => {
    hobbyInput.simulate('change', { target: { value: 'Sam' } });
    yearInput.simulate('change', { target: { value: '' } });
    wrapper.find('.addHobbybutton').simulate('click');
    const errorDiv = wrapper.find('.errorDiv')
    const errorText = errorDiv.text();
    expect(errorText).toEqual('Please enter year');
  });

  it('should get added in hobbies list', () => {
    hobbyInput.simulate('change', { target: { value: 'Play Basketball' } });
    yearInput.simulate('change', { target: { value: '1990' } });
    wrapper.find('.addHobbybutton').simulate('click');
    expect(addHobby).toBeCalledTimes(1);
  });
 });




