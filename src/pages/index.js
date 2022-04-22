import React from 'react';
import { Layout, SEO, HomepageCollectionsGrid, FeaturedProducts } from 'components';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const {collections} = React.useContext(ProductContext);
  console.log(collections);

  return (
    <Layout>
      <SEO title="Homepage" description="The M. Hatter Store Homepage" />
      <Hero />
      <HomepageCollectionsGrid collections={collections.filter(collection => collection.title !== 'Featured Hats' )}></HomepageCollectionsGrid>
      <Testimonials />
      {!!collections.find(collection => collection.title === 'Featured Hats') &&
        <FeaturedProducts />
      }
      
    </Layout>
  );
};

export default IndexPage;
