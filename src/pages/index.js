import React from 'react';
import { Layout, SEO, HomepageCollectionsGrid, FeaturedProducts } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const {collections} = React.useContext(ProductContext);
  console.log(collections);

  return (
    <Layout>
      <SEO title="Homepage" description="The M. Hatter Store Homepage" />
      <HomepageCollectionsGrid collections={collections.filter(collection => collection.title !== 'Featured Hats' )}></HomepageCollectionsGrid>

      {!!collections.find(collection => collection.title === 'Featured Hats') &&
        <FeaturedProducts />
      }
      
    </Layout>
  );
};

export default IndexPage;
