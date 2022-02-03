import reducer, { updateKeyword } from '../../feature/search';

describe('Search Reducer testing', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {type: ''})).toEqual({
            value: ''
        })
    });

});