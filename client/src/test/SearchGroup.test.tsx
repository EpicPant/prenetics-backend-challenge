import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { SearchInputGroup } from '../component/SearchInputGroup';

describe('Search Input Group Testing', () => {

    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <SearchInputGroup />
            </Provider>
        );
    });

    it('starts with empty input', () => {
        const input = wrapper.find('input#keyword');
        expect(input.length).toBe(1);
    });

});