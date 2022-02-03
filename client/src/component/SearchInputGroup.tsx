import '../style/search_input_group.css';
import React, { useState } from 'react';
import { updateKeyword } from '../feature/search';
import { SEARCH_PLACEHOLDER } from './Constants';
import { useDispatch } from 'react-redux';

export const SearchInputGroup = () => {

    const [searchInput, setSearchInput] = useState('');

    const dispatch = useDispatch();

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!searchInput) return;
        dispatch(updateKeyword({ value: searchInput }));
    }

    return (
        <form className='search-group' onSubmit={handleFormSubmit}>
            <i className="fa fa-search"/>
            <input type="text" placeholder={SEARCH_PLACEHOLDER} value={searchInput} onChange={(e) => setSearchInput(e.target.value)} id="keyword" />               
        </form>
    )
}