import React from 'react'
import Marquee from "react-fast-marquee";
import 
{ 
   MarqueeContainer,
   MarqueeCard1,
   MarqueeCard2,
   MarqueeCard3,
   MarqueeCard4,
   MarqueeCard5,
   MarqueeCard6,
   MarqueeCard7,
   MarqueeCard8,
   MarqueeCard9,
   MarqueeCard10,
   MarqueeContentContainer,
   MarqueeContent,
   Title
} 
from './styles'
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import {StyledLink} from '../StyledLink';

export default function FastMarquee() {
  return (
    <MarqueeContainer>
       <Marquee pauseOnHover={true} gradient={false} speed={30} loop={0}>

         <MarqueeCard1>
            <Link to={`/products/theres-no-place-like-home-ohio-state`}>
               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>
            </Link>
         </MarqueeCard1>

         <MarqueeCard2>
            <Link to={`/products/marquee-script-ohio-blackout-gameday-jacket`}>
               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>
            </Link>
         </MarqueeCard2>

         <MarqueeCard3>
            <Link to={`/products/go-to-hoodie`}>
               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>
            </Link>
         </MarqueeCard3>

         <MarqueeCard4>
            <Link to={`/products/the-ultimate-warrior`}>
               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>
            </Link>
         </MarqueeCard4>

         <MarqueeCard5>
            <Link to={`/products/acadia-national-park-hoodie`}>
               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>
            </Link>
         </MarqueeCard5>

         <MarqueeCard6>
            <Link to={`/products/club-tril-hoodie`}>
               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>
            </Link>
         </MarqueeCard6>

         <MarqueeCard7>
            <Link to={`/products/budweiser-official-party-shirt`}>
               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>
            </Link>
         </MarqueeCard7>

         <MarqueeCard8>
            <Link to={`/products/grateful-dead-steal-your-face-hoodie`}>
               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>
            </Link>
         </MarqueeCard8>

         <MarqueeCard9>
            <Link to={`/products/budweiser-king-of-beers`}>
               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>
            </Link>
         </MarqueeCard9>

         <MarqueeCard10>
            <Link to={`/products/block-ohio-state-coachs-jacket`}>
               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>
            </Link>
         </MarqueeCard10>

       </Marquee>
    </MarqueeContainer>
  )
}
