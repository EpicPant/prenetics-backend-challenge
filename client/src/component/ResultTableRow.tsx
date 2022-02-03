import '../style/result_table_row.css';
import React from 'react';

interface TableRowProps {
    patientName: String;
    activationTime: Date;
    resultTime: Date;
    result: String;
    sampleId: String;
}

export default class ResultTableRow extends React.Component<TableRowProps> {
    render() {
        return (
            <tr id="results">
                <td>{this.props.sampleId}</td>
                <td>{this.props.activationTime.toDateString()}</td>
                <td>{this.props.resultTime.toDateString()}</td>
                <td>-</td>
                <td>{this.props.patientName}</td>
                <td>{this.props.result === 'positive' ? 'detected' : 'not-detected'}</td>
            </tr>
        );
    }
}