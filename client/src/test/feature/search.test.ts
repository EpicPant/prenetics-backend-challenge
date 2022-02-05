import { searchReducer as reducer, updateKeyword } from '../../feature/search';
import { SearchState } from '../../resources/types';

describe('Search Reducer testing', () => {

    let initialState: SearchState;

    beforeEach(() => {
        initialState = {
            value: ''
        }
    });

    it('should return empty initial state', () => {
        expect(reducer(undefined, { type: '' })).toEqual(initialState);
    });

    it('should update search keyword', () => {
        const outcome = { ...initialState };
        outcome.value = 'test';

        expect(reducer(initialState, updateKeyword({ value: 'test' }))).toEqual(outcome);
    });

});