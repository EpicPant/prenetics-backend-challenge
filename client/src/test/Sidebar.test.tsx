import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Sidebar from '../component/Sidebar';

describe('Prenetics Sidebar Testing', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Sidebar />);
    });

    test('render div#sidebar', () => {
        expect(wrapper.find('div#sidebar').length).toBe(1);
    })

    test('render the Prenetics™ title', () => {
        const text = wrapper.text().includes('Prenetics™');
        expect(text).toBe(true);
    });

    test('render veretical menu with 3 links', () => {
        const menu = wrapper.find('menu');
        expect(menu.length).toBe(1);

        expect(menu.find('li').length).toBe(3);
    });

    test('render log-in status at the bottom', () => {
        const container = wrapper.find('div#status');
        expect(container.length).toBe(1);

        expect(container.find('label.light').length).toBe(1);
        expect(container.find('label').length).toBe(2);
        expect(container.find('hr').length).toBe(1);
        expect(container.find('a#logout').length).toBe(1);
    });
});