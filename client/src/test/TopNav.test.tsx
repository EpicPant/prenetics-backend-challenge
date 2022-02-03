import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TopNav from '../component/TopNav';
import { text } from 'node:stream/consumers';

describe('TopNav Testing', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<TopNav />);
    });

    test('render container', () => {
        expect(wrapper.find('div#topnav').length).toBe(1);
    });

    test('render title', () => {
        const tag = wrapper.find('h2');

        expect(tag.length).toBe(1);
        expect(tag.text()).toBe('Patient Management');
    });

    describe('right side of TopNav', () => {

        test('render organistaion name', () => {
            expect(wrapper.find('label').length).toBe(2);
            expect(wrapper.find('label.light').length).toBe(1);
            expect(wrapper.find('label.light').text()).toBe('Your Organisation:');
        });
        
    });

});