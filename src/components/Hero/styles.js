import styled from 'styled-components'
import HeroStaticBg from "../../images/static-hero-bg.webp"
import {StyledLink} from '../StyledLink';

export const HeroContainer = styled.div`
   background: linear-gradient(
   180deg,
   rgba(0, 0, 0, 0.5) 0%,
   rgba(0, 0, 0, 0.5) 100%
   ),
   url(${HeroStaticBg}) no-repeat center;
   background-size: cover;
   display: flex;
   justify-content: center;
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
   padding: 0rem calc((100vw - 1300px) /2);
`;

export const HeroItems = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   height: 100vh;
   max-height: 100%;
   padding: 0;
   color: #fff;
   line-height: 1.1;
   font-weight: bold;
`;

export const HeroH1 = styled.h1`
   font-size: clamp(1.5rem, 6vw, 4rem);
   font-family: 'Fraunces';
   margin-bottom: 1.5rem;
   letter-spacing: 3px;
   padding: 0 1rem;
`;

export const HeroP = styled.p`
   font-size: clamp(1rem, 3vw, 3rem);
   font-family: 'Commissioner';
   margin-bottom: 2rem;
   font-weight: 400;
`;