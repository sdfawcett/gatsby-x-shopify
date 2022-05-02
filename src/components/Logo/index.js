import React from 'react';
import Img from 'gatsby-image';
import VbLogo from '../../images/svg/cowtown-logo-light-v2-cropped.svg';
import { LogoContainer } from './styles';

export function Logo() {
    return (
      <LogoContainer>
        <VbLogo />
      </LogoContainer>
    );
}