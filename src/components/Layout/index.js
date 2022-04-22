import React from 'react';
import { LayoutWrapper } from './styles';
import { Header } from '../Header';
import Hero from '../Hero';

const Layout = ({ children }) => {
  return (
    <>
    <Header />
    <Hero />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
    </>
  );
};

export { Layout };
