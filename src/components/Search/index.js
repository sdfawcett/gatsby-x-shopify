import React from 'react';
import {Input} from '../SearchInput';
import {SearchButton} from '../SearchButton';
import {FaSearch} from 'react-icons/fa';
import {Heading, SearchForm, InputContainer, Suggest} from './styles';
import {navigate, useLocation} from '@reach/router';
import queryString from 'query-string';

export function Search() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const {search} = useLocation();
    const c = queryString.parse(search)?.c || '';

    const handleSubmit = (e) => {
        e.preventDefault();

        if (c) {
            navigate(
                `/all-products?s=${encodeURIComponent(
                searchTerm
            )}&c=${encodeURIComponent(c)}`
            );
        } else {
            navigate(`/all-products?s=${encodeURIComponent(searchTerm)}`);
        }
    };
    
    return (
        <>
        <Heading>Product Search</Heading>
        <SearchForm onSubmit={handleSubmit}>
            <InputContainer>
                <Input value={searchTerm} 
                onChange={(e) => setSearchTerm(e.currentTarget.value)} 
                placeholder="Search" 
                />
                <Suggest id='suggest' />
            </InputContainer>
            <SearchButton>
                <FaSearch />
            </SearchButton>
        </SearchForm>
        </>
    );
}