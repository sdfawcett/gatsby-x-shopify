import React from 'react'
import 
{ 
   FooterContainer,
   FooterLinksWrapper,
   FooterDesc,
   FooterLinkItems,
   FooterLinkTitle,
   FooterLink,
   LogoContainer
} 
from './styles'
import {Link} from 'gatsby';
import CowtownLogoLight from '../../images/svg/cowtown-logo-light-cropped.svg';

export default function Footer() {

   const getCurrentYear = () => {
      return new Date().getFullYear();
    };

  return (
    <FooterContainer>
       <FooterLinksWrapper>
          <FooterDesc>

            <Link to='/'>
               <LogoContainer>
                  <CowtownLogoLight />
               </LogoContainer>
            </Link>

             <p>We strive to create the best experiences for our customers</p>
             <p>&copy; {getCurrentYear()} Cowtown Tees, Inc. All rights reserved.</p>
          </FooterDesc>
          <FooterLinkItems>
             <FooterLinkTitle>Contact</FooterLinkTitle>
             <FooterLink to='/'>Help &#38; Contact</FooterLink>
             <FooterLink to='/'>Locations</FooterLink>
          </FooterLinkItems>
       </FooterLinksWrapper>

       <FooterLinksWrapper>
         <FooterLinkItems>
             <FooterLinkTitle>Returns &#38; Exchanges</FooterLinkTitle>
             <FooterLink to='/'>Return Policy</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
             <FooterLinkTitle>Legal</FooterLinkTitle>
             <FooterLink to='/'>Privacy &#38; Terms</FooterLink>
          </FooterLinkItems>
       </FooterLinksWrapper>

    </FooterContainer>
  )
}
