import React from 'react';
import { LayoutLite, SEO } from 'components';

const NotFoundPage = () => (
  <LayoutLite>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutLite>
);

export default NotFoundPage;
