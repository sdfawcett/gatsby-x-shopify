import React from 'react';
import { LayoutWrapper } from './styles';
import { Header } from '../Header';
import Footer from '../Footer';
import CartDrawer from '../CartDrawer';

const LayoutLite = ({ children }) => {

  return (
    <>
      <Header />
      <CartDrawer />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export { LayoutLite };
