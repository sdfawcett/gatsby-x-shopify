import React from 'react';
import ProductContext from 'context/ProductContext';
import { CategoryFilterItem } from './CategoryFilterItem';
import { Search } from '../Search';
import { FiltersWrapper } from './styles';

export function Filters() {
    const {collections} = React.useContext(ProductContext);

    return (
        <FiltersWrapper>
            <div className='search-input-container'>
                <Search />
            </div>
            
            <strong>
                Filter By Category
            </strong>
            {collections.map(collection => (
                <CategoryFilterItem
                title={collection.title} 
                key={collection.shopifyId} 
                id={collection.shopifyId}
                />
            ))}
        </FiltersWrapper>
    );
}