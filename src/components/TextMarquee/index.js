import React from 'react'
import Marquee from "react-fast-marquee";
import 
{ 
   MarqueeContainer, MarqueeItem,
} 
from './styles'

export default function TextMarquee() {
  return (
    <MarqueeContainer>
       <Marquee pauseOnHover={false} gradient={false} speed={30} loop={0} direction={'right'}>

         <MarqueeItem>
            The Ohio State University
         </MarqueeItem>

         <MarqueeItem>
            Cleveland Browns
         </MarqueeItem>

         <MarqueeItem>
            Cleveland Guardians
         </MarqueeItem>

         <MarqueeItem>
            Buckeyes
         </MarqueeItem>

         <MarqueeItem>
            Football
         </MarqueeItem>

         <MarqueeItem>
            Baseball
         </MarqueeItem>

         <MarqueeItem>
            Carmen Ohio
         </MarqueeItem>

         <MarqueeItem>
            The Horseshoe
         </MarqueeItem>

         <MarqueeItem>
            The Ohio State University
         </MarqueeItem>

         <MarqueeItem>
            Cleveland Browns
         </MarqueeItem>

         <MarqueeItem>
            Cleveland Guardians
         </MarqueeItem>

         <MarqueeItem>
            Buckeyes
         </MarqueeItem>

         <MarqueeItem>
            Football
         </MarqueeItem>

         <MarqueeItem>
            Baseball
         </MarqueeItem>

         <MarqueeItem>
            Carmen Ohio
         </MarqueeItem>

         <MarqueeItem>
            The Horseshoe
         </MarqueeItem>

       </Marquee>
    </MarqueeContainer>
  )
}
