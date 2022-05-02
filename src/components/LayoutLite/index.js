import React, { useState } from 'react';
import { LayoutWrapper } from './styles';
import { HeaderLite } from '../HeaderLite';
import Footer from '../Footer';
import CartDrawer from '../CartDrawer';

const LayoutLite = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <HeaderLite toggle={toggle} />
      <CartDrawer isOpen={isOpen} toggle={toggle} />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export { LayoutLite };
