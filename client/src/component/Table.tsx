import React from 'react';
import { SEARCH_PLACEHOLDER } from './Constants';

export default class Table extends React.Component {
    render() {
        return (
            <div id="table">
                <span className='search-group'>
                    <i className="fa fa-search"/>
                    <input type="text" placeholder={SEARCH_PLACEHOLDER} />
                </span>
            </div>
        )
    }
}