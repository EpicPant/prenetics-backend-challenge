import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ResultTableRow } from '../component/ResultTableRow';

describe('Result Table Row', () => {
    const initialValue = {
        sampleId: "123456",
        activationTime: new Date(),
        resultTime: new Date(),
        result: 'negative',
        patientName: 'Bruce Lee'
    }

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<ResultTableRow  {...initialValue} />);
    });

    it('should render 5 td with corresponding result data', () => {
        const td = wrapper.find('td');
        expect(td.length).toEqual(6);

        expect(wrapper.text().includes(initialValue.sampleId)).toBeTruthy;
        expect(wrapper.text().includes(initialValue.activationTime.toDateString())).toBeTruthy;
        expect(wrapper.text().includes(initialValue.resultTime.toDateString())).toBeTruthy;
        expect(wrapper.text().includes(initialValue.result)).toBeTruthy;
        expect(wrapper.text().includes(initialValue.patientName)).toBeTruthy;
    });
});