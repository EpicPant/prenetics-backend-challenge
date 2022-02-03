import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { TestResultPage } from '../component/TestResultPage';
import { SearchInputGroup } from '../component/SearchInputGroup';
import { ResultTableRow } from '../component/ResultTableRow';

describe('Table Testing', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<TestResultPage />);
    });
   
    test('Search Group', () => {
        expect(wrapper.find(SearchInputGroup).length).toEqual(1);
    });

    test('Table Header', () => {
        const tableRow = wrapper.find('tr');

        expect(tableRow.find('th').length).toEqual(6);
        expect(tableRow.text().includes('Barcode')).toBeTruthy();
        expect(tableRow.text().includes('Activation')).toBeTruthy();
        expect(tableRow.text().includes('Report Released')).toBeTruthy();
        expect(tableRow.text().includes('Rejection')).toBeTruthy();
        expect(tableRow.text().includes('Name')).toBeTruthy();
        expect(tableRow.text().includes('Result')).toBeTruthy();
    });

    test('Table Body', () => {
        expect(wrapper.find(ResultTableRow).length).toBeLessThanOrEqual(15);
    });

});