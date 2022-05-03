import styled from 'styled-components'
import HeroStaticBg from "../../images/hero-sweatshorts.webp"
import {StyledLink} from '../StyledLink';

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
      padding: 10px;
      background: white;
      border: 1px solid black;
      font-weight: bold;
      font-size: 16px;
      text-transform: uppercase;
      display: inline-block;
      color: black;
      text-decoration: none;
      cursor: pointer;

      &:hover {
            color: white;
            background: black;
      }
   }

   @media(max-width: 768px) {
      background-position: 75% 75%;

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

export const HeroContent = styled.div`
   z-index: 3;
   height: calc(100vh - 80px);
   max-height: 100%;
   width: 100%;
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
    }
`;

export const HeroH1 = styled.h1`
   font-size: clamp(3rem,5vw,4rem);
   font-family: 'Merriweather', serif;
   margin-bottom: 1.5rem;
   letter-spacing: 3px;
   padding: 0 1rem 0 0;
`;

export const HeroP = styled.p`
   font-size: clamp(1rem,5vw,2.5rem);
   font-family: 'Karla', sans-serif;
   margin-bottom: 2rem;
   font-weight: 400;

   @media(max-width: 768px) {
      text-align: center;
      margin: 0 auto;
    }
`;