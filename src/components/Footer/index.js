import React from 'react'
import 
{ 
   FooterContainer,
   FooterLinksWrapper,
   FooterDesc,
   FooterLinkItems,
   FooterLinkTitle,
   FooterLink
} 
from './styles'

export default function Footer() {
  return (
    <FooterContainer>
       <FooterLinksWrapper>
          <FooterDesc>
             <h1>Mad Hatter</h1>
             <p>We strive to create the best experiences for our customers</p>
          </FooterDesc>
          <FooterLinkItems>
             <FooterLinkTitle>Contact Us</FooterLinkTitle>
             <FooterLink to='/'>Contact</FooterLink>
             <FooterLink to='/'>Support</FooterLink>
             <FooterLink to='/'>Contact</FooterLink>
             <FooterLink to='/'>Refund Policy</FooterLink>
          </FooterLinkItems>
       </FooterLinksWrapper>

       <FooterLinksWrapper>
         <FooterLinkItems>
             <FooterLinkTitle>Contact Us</FooterLinkTitle>
             <FooterLink to='/'>Contact</FooterLink>
             <FooterLink to='/'>Support</FooterLink>
             <FooterLink to='/'>Contact</FooterLink>
             <FooterLink to='/'>Refund Policy</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
             <FooterLinkTitle>Contact Us</FooterLinkTitle>
             <FooterLink to='/'>Contact</FooterLink>
             <FooterLink to='/'>Support</FooterLink>
             <FooterLink to='/'>Contact</FooterLink>
             <FooterLink to='/'>Refund Policy</FooterLink>
          </FooterLinkItems>
       </FooterLinksWrapper>

    </FooterContainer>
  )
}
