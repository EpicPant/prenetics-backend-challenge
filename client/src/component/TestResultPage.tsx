import '../style/table.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import SearchInputGroup from './SearchGroup';
import ResultTableRow from './ResultTableRow';

const mockData = {
    sampleId: "213812937246234",
    patientName: "Peter Chan",
    activationTime: new Date(),
    resultTime: new Date(),
    result: 'positive'
}

export default class TestResultPage extends React.Component {
    render() {
        return (
            <div id="table">
                <Provider store={store}>
                    <SearchInputGroup />

                    <table id="result-table">
                        <thead>
                            <tr>
                                <th>Barcode</th>
                                <th>Activation</th>
                                <th>Report Released</th>
                                <th>Rejection</th>
                                <th>Name</th>
                                <th>Result</th>
                            </tr>
                        </thead>

                        <tbody>
                            <ResultTableRow {...mockData} />
                            <ResultTableRow {...mockData} />
                            <ResultTableRow {...mockData} />
                            <ResultTableRow {...mockData} />
                            <ResultTableRow {...mockData} />
                            <ResultTableRow {...mockData} />
                        </tbody>
                    </table>
                </Provider>
            </div>
        )
    }
}