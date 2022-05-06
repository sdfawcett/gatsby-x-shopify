import styled from 'styled-components'
import { Link } from 'gatsby';

export const FooterContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   margin: 0 auto;
   padding: 0.5rem;
   color: white;
   background: #262626;
`;

export const LogoContainer = styled.div`
   width: 5rem;
   margin: 5% 0 5% 0;
`;

export const FooterLinksWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);

   @media screen and (max-width: 820px) {
      grid-template-columns: 1fr;
   }
`;

export const FooterDesc = styled.div`
   padding: 0 2rem;
   color: #ccc;

   h1 {
      margin-bottom: 3rem;
      color: #f26a2e;
   }

   p {
      margin-bottom: 1rem;
   }

   p:last-child {
      font-size: .75rem;
   }

   @media screen and (max-width: 400px) {
      padding: 1rem;
   }
`;

export const FooterLinkItems = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 1rem 2rem;

   @media screen and (max-width: 400px) {
      padding: 1rem;
   }
`;

export const FooterLinkTitle = styled.h2`
   font-size: 14px;
   margin-bottom: 16px;
   font-weight: bold;
   letter-spacing: 1px;
   color: #ccc;
`;

export const FooterLink = styled(Link)`
   text-decoration: none;
   margin-bottom: 0.5rem;
   font-size: 14px;
   color: #ccc;

   &:hover {
      color: #bb0000;
      transition: 0.3s ease-out;
   }
`;