import React from 'react';
import ProductContext from 'context/ProductContext';
import { Heading } from './styles';
import { ProductsGrid } from '../ProductsGrid';

export function FeaturedProducts() {
    const {collections} = React.useContext(ProductContext);

    const featuredCollection = collections.find(
        collection => collection.title === 'Featured Hats'
        );

    return (
        <section>
            <Heading>This Month's Hot Items</Heading>
            <ProductsGrid products={featuredCollection.products} />
        </section>
    );
}