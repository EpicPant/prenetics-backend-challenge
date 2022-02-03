import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from '../component/App';
import { Sidebar } from '../component/Sidebar';
import { TopNav } from '../component/TopNav';
import { TestResultPage } from '../component/TestResultPage';


describe('App Testing', () => {
  let wrapper: ShallowWrapper;

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
    expect(wrapper.find(TestResultPage).length).toEqual(1);
  });

});