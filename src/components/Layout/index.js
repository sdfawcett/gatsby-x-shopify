import React, { useState } from 'react';
import { LayoutWrapper } from './styles';
import { Header } from '../Header';
import Hero from '../Hero';
import ImageMarquee from '../Marquee';
import TextMarquee from '../TextMarquee';
import SignupCTA from '../SignupCTA';
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
    <ImageMarquee />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
    <TextMarquee />
    <SignupCTA />
    <Footer />
    </>
  );
};

export { Layout };
