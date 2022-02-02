import React from 'react';
import { shallow } from 'enzyme';
import App from '../component/App';
import Sidebar from '../component/Sidebar';
import TopNav from '../component/TopNav';
import Table from '../component/Table';


describe('App Testing', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<App/>);
  });

  test('App rendered Sidebar properly', () => {
    expect(wrapper.find(Sidebar).length).toEqual(1);
  });

  test('rendered TopNavigation properly', () => {
    expect(wrapper.find(TopNav).length).toEqual(1);
  });

  test('rendered Table properly', () => {
    expect(wrapper.find(Table).length).toEqual(1);
  });

});