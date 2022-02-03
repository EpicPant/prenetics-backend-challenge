import React, { ReactPropTypes } from 'react';
import { JsxElement } from 'typescript';

interface FooterProps {
    total: number;
    current_page: number;
    total_page: number
}

const PageLink = (props: { children?: any }) => {
    return (
        <li>
            <a>{props.children}</a>
        </li>
    )
}

export const ResultTableFooter = (props: FooterProps) => {
    return (
        <div id='table-footer'>
            <div id='result-total'>
                <p>{props.total} records in total</p>
            </div>

            <div id="pagination">
                <ul>
                    <PageLink>1</PageLink>
                </ul>
            </div>
        </div>
    );
}