import React from 'react';

interface TableRowProps {
    patientName: String;
    activationTime: Date;
    resultTime: Date;
    result: String;
    sampleId: String;
}

export const ResultTableRow = (props: TableRowProps) => {
    return (
        <tr id="results">
            <td>{props.sampleId}</td>
            <td>{props.activationTime.toDateString()}</td>
            <td>{props.resultTime.toDateString()}</td>
            <td>-</td>
            <td>{props.patientName}</td>
            <td>{props.result === 'positive' ? 'detected' : 'not-detected'}</td>
        </tr>
    );
}