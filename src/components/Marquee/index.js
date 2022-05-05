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
                     <StyledLink to={`/products/undefeated-out-of-conference-tee`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard1>

         <MarqueeCard2>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/thanks-for-the-wind-tee`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard2>

         <MarqueeCard3>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/brooklyn-dagger-tee`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard3>

         <MarqueeCard4>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/ohio-crest-tee`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard4>

         <MarqueeCard5>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/block-ohio-tee`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard5>

         <MarqueeCard6>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/president-dogs-tee`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard6>

         <MarqueeCard7>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/eleven-warriors-vintage-hoodie`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard7>

         <MarqueeCard8>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/1st-ohio-battery-hoodie`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard8>

         <MarqueeCard9>

               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/eleven-warriors-vintage-snapback`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>

         </MarqueeCard9>

         <MarqueeCard10>
            
               <MarqueeContentContainer>
                  <MarqueeContent>
                     <StyledLink to={`/products/ohio-flag-sticker`}>Buy Now</StyledLink>
                  </MarqueeContent>
               </MarqueeContentContainer>
            
         </MarqueeCard10>

       </Marquee>
    </MarqueeContainer>
  )
}
