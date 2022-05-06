import styled, { css } from 'styled-components'
import HeroStaticBg from "../../images/hero-wts.webp"
import {StyledLink} from '../StyledLink';

const fullWidthStyles = ({fullWidth}) => {
   if (fullWidth) {
       return css`
           display: block;
           width: 100%;
       `
   }
}

export const HeroContainer = styled.div`
   background: linear-gradient(
   180deg,
   rgba(0, 0, 0, 0.5) 0%,
   rgba(0, 0, 0, 0.5) 100%
   ),
   url(${HeroStaticBg}) no-repeat;
   background-position: center;
   background-size: cover;
   display: flex;
   justify-content: flex-start;
   color: #fff;
   width:100%;
   height: 100vh;
   align-items: center;
   position: relative;


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
      border: 4px solid #262626;
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
         border-top-color: #262626;
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

   @media(max-width: 1500px) {
      background-position: 80% 75%;
      
    }

    @media(max-width: 768px) {
      height: 125vh;
      ${StyledLink} {
         margin: 2rem auto 0 auto;
      }
    }

`;

export const HeroBg = styled.div`
   position: absolute;

   background: linear-gradient(
   180deg,
   rgba(0, 0, 0, 0.5) 0%,
   rgba(0, 0, 0, 0.5) 35%,
   rgba(0, 0, 0, 0.1) 100%
   ),
   url(${HeroStaticBg}) no-repeat center;
   background-size: cover;
   width:100%;
   height: 100%;
   overflow: hidden;
`;

export const VideoBg = styled.video`
   width: 100%;
   height: 100%;
   -o-object-fit: cover;
   object-fit: cover;
`;


export const QuoteWrapper = styled.div`
   padding: 20px;
   position: absolute;
   top: 50%;
   left: 55%;
   width: 35%;

   @media(max-width: 768px) {
      top: 75%;
      left: 11%;
      width: 70%;
    }
`;

export const QuoteBody = styled.div`
   position: relative;
   border-top: 0.45em solid #bb0000;
   border-bottom: 0.45em solid #bb0000;
   padding: 20px 0!important;
   letter-spacing: -0.08em;
   transform: rotate(2deg);
`;

export const QuoteQMark = styled.div`
   position: absolute;
   font-size: 10em;
   font-weight: bold;
   color: white;
   opacity: 0.2;
   bottom: -63px;
   right: 0;
   -moz-user-select: none;
   -ms-user-select: none;
   -webkit-user-select: none;
   user-select: none;
`;

export const QuoteBase = styled.div``;

export const BlockQuote = styled.blockquote`
   font-weight: bold;
   font-family: 'Commissioner';
   font-size: 1.75rem;
   line-height: 1.3em;
   letter-spacing: 1px;
   color: white;

   >cite {
         display: block;
         font-size: 1.5rem;
         font-family: 'Grape Nuts';
         color: white;
         text-transform: uppercase;
         letter-spacing: 3px;
         font-weight: bold;
         margin-top: 10px;
      }

    @media(max-width: 1024px) {
      font-size: 1.5rem;
    }

    @media(max-width: 768px) {
      font-size: 1rem;
      >cite {
         display: block;
         font-size: 1rem;
         font-family: 'Grape Nuts';
         color: white;
         text-transform: uppercase;
         letter-spacing: 3px;
         font-weight: bold;
         margin-top: 10px;
      }
    }
`;


export const HeroContent = styled.div`
   z-index: 3;
   height: calc(90vh - 80px);
   max-height: 100%;
   width: 100%;
`;

export const HeroInfo = styled.div`

`;

export const HeroItems = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   text-align: left;
   margin: 0 4rem;
   height: 100vh;
   max-width: 65%;
   max-height: 100%;
   padding: 0;
   color: #fff;
   line-height: 1.1;
   font-weight: bold;

   @media(max-width: 768px) {
      max-width: 100%;
      margin: 0 1rem;
      text-align: center;
      justify-content: flex-start;
    }
`;

export const HeroH1 = styled.div`
   margin-bottom: 1.5rem;
   letter-spacing: 3px;
   padding: 0 1rem 0 0;

   >h1 {
      font-size: clamp(3rem,5vw,4rem);
      font-family: 'Merriweather', serif;
   }
`;

export const HeroP = styled.div`
   margin-bottom: 2rem;
   max-width: 60%;

   >p {
      font-size: clamp(1.5rem,4vw,2rem);
      font-family: 'Karla', sans-serif;
      font-weight: 400;
   }

   @media(max-width: 768px) {
      text-align: center;
      margin: 0 auto;
    }
`;