import React from 'react';
import { Layout, SEO, HomepageCollectionsGrid, FeaturedProducts } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const {collections} = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO title="Ohio-Themed Tees and Merch" description="Cowtown Tees" />
      
      <HomepageCollectionsGrid collections={collections.filter(collection => collection.title !== 'Featured Items' )}></HomepageCollectionsGrid>

      {!!collections.find(collection => collection.title === 'Featured Items') &&
        <FeaturedProducts />
      }
      
    </Layout>
  );
};

export default IndexPage;
