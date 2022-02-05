import '../style/search_input_group.css';
import React from 'react';
import { updateKeyword } from '../feature/search';
import { SEARCH_PLACEHOLDER } from '../resources/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

export const SearchInputGroup = () => {

    const { value } = useSelector((state: RootState) => state.search);

    const dispatch = useDispatch();

    const changeKeyword = (v: string) => {
        dispatch(updateKeyword({ value: v }));
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form className='search-group' onSubmit={handleFormSubmit} data-testid='search-input-group'>
            <i className='fa fa-search'/>
            <input type='text' name='keyword' data-testid='search-input' placeholder={SEARCH_PLACEHOLDER} value={value} onChange={(e) => changeKeyword(e.target.value)} id='keyword' />               
        </form>
    )
}