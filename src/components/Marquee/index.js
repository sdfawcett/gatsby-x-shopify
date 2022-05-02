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

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/theres-no-place-like-home-ohio-state`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard1>

         <MarqueeCard2>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/marquee-script-ohio-blackout-gameday-jacket`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard2>

         <MarqueeCard3>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/go-to-hoodie`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard3>

         <MarqueeCard4>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/the-ultimate-warrior`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard4>

         <MarqueeCard5>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/acadia-national-park-hoodie`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard5>

         <MarqueeCard6>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/club-tril-hoodie`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard6>

         <MarqueeCard7>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/budweiser-official-party-shirt`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard7>

         <MarqueeCard8>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/grateful-dead-steal-your-face-hoodie`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard8>

         <MarqueeCard9>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/budweiser-king-of-beers`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard9>

         <MarqueeCard10>
            
               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/block-ohio-state-coachs-jacket`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>
            
         </MarqueeCard10>

       </Marquee>
    </MarqueeContainer>
  )
}
