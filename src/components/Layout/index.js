import React, { useState } from 'react';
import { LayoutWrapper } from './styles';
import { Header } from '../Header';
import Hero from '../Hero';
import Footer from '../Footer';
import CartDrawer from '../CartDrawer';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <Header toggle={toggle} />
    <CartDrawer isOpen={isOpen} toggle={toggle} />
    <Hero />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
    <Footer />
    </>
  );
};

export { Layout };
