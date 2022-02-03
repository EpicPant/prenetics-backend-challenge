import '../style/table.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResultsFromAPI } from '../feature/result';
import { SearchInputGroup } from './SearchInputGroup';
import { ResultTableRow } from './ResultTableRow';
import { Pagination } from './Pagination';
import { TotalResultFound } from './TotalResultFound';
import { RootState } from '../store';

export const TestResultPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getResultsFromAPI())
    }, [])

    const { data, meta, status } = useSelector((state: RootState) => state.result);
    if (status !== 'fulfilled') {
        return (
            <div id='table'>
                Loading...
            </div>       
        )
    }

    return (
        <>
            <div id='content-card'>
                <SearchInputGroup />
                <div id='table-wrapper'>
                    <table id='result-table'>
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
                            { data.map((item, i) => (
                                <ResultTableRow key={i} {...item} />
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
            <div id='table-footer'>
                <TotalResultFound>{meta.total}</TotalResultFound>
                <Pagination />
            </div>
        </>
    );
}