import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { SearchInputGroup } from '../../component/SearchInputGroup';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { searchReducer as reducer, updateKeyword } from '../../feature/search';

describe('Search Input Group Testing', () => {

    beforeEach(() => {
        render(
            <Provider store={store}>
                <SearchInputGroup />
            </Provider>
        )
    });

    afterEach(cleanup);

    it('renders <input/>', () => {
        const input = screen.getByTestId('search-input');
        expect(input).not.toBeNull();
    });

    it('redux action called when input update', () => {
        const input = screen.getByTestId('search-input');
        expect(store.getState().search.value).toBe('');
        fireEvent.change(input, {
            target: {
                value: 'test'
            }
        });
        expect(store.getState().search.value).toBe('test');
    });

});