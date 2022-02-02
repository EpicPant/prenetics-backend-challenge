import React from 'react';
import { shallow } from 'enzyme';
import TopNav from '../component/TopNav';
import { text } from 'node:stream/consumers';

describe('TopNav Testing', () => {

    test('render container', () => {
        const wrapper = shallow(<TopNav />);
        expect(wrapper.find('div#topnav').length).toBe(1);
    });

    test('render title', () => {
        const wrapper = shallow(<TopNav />);
        const tag = wrapper.find('h2');

        expect(tag.length).toBe(1);
        expect(tag.text()).toBe('Patient Management');
    });

    describe('right side of TopNav', () => {

        test('render organistaion name', () => {
            const wrapper = shallow(<TopNav />);

            expect(wrapper.find('label').length).toBe(2);
            expect(wrapper.find('label.light').length).toBe(1);
            expect(wrapper.find('label.light').text()).toBe('Your Organisation:');
        });
        
    });

});