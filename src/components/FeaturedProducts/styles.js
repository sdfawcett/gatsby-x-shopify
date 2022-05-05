import styled, { css } from 'styled-components';
import {StyledLink} from '../StyledLink'

const fullWidthStyles = ({fullWidth}) => {
   if (fullWidth) {
       return css`
           display: block;
           width: 100%;
       `
   }
}

export const FeaturedProductsWrapper = styled.section`
   text-align: center;
   margin: 5rem 0;

      ${StyledLink} {
         outline: none;
         padding: 1rem 0.5rem;
         box-shadow: none;
         font-size: 16px;
         font-family: 'Commissioner', sans-serif;
         cursor: pointer;
         font-weight: bold;
         text-transform: uppercase;
         text-decoration: none;
         background: #bb0000;
         color: white;
         border: 4px solid #333;
         position: relative;
         white-space: nowrap;
         transition: all .1s ease-in;
         ${fullWidthStyles}

         &:hover:not(:disabled) {
         color: white;
         background: #700000;
         }

         &:active:not(:disabled) {
         top: .1rem;
         }

         &:active::after {
         border-top-width: .4rem;
         bottom: -1.15rem;
         }

         &::after {
         content: '';
         height: 0;
         border: .5rem solid transparent;
         border-top-color: #333;
         position: absolute;
         left: -.25rem;
         bottom: -1.25rem;
         display: inline-block;
         width: calc(100% - .5rem);
         }

         &:disabled {
         border-color: #999;
         cursor: not-allowed;
         color: #999;
         }
   }
`;

export const Heading = styled.h1`
   font-family: 'Merriweather', serif;
   margin-bottom: 1rem;
   font-size: clamp(1rem,5vw,3rem);
   padding: 0 1rem;
`;

