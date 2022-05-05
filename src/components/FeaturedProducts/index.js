import React from 'react';
import ProductContext from 'context/ProductContext';
import { Heading, FeaturedProductsWrapper } from './styles';
import { ProductsGrid } from '../ProductsGrid';
import {StyledLink} from '../StyledLink'

export function FeaturedProducts() {
    const {collections} = React.useContext(ProductContext);

    const featuredCollection = collections.find(
        collection => collection.title === 'Featured Hats'
        );

    return (
        <FeaturedProductsWrapper>

            <ProductsGrid products={featuredCollection.products} />
            <StyledLink to='/all-products'>
                View More Products
            </StyledLink> 
        </FeaturedProductsWrapper>
    );
}