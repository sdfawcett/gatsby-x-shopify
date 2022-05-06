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
            William Tecumseh Sherman
         </MarqueeItem>

         <MarqueeItem>
            Columbus
         </MarqueeItem>

         <MarqueeItem>
            Buckeyes
         </MarqueeItem>

         <MarqueeItem>
            Football
         </MarqueeItem>

         <MarqueeItem>
            Afro Duck
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
            Mirror Lake
         </MarqueeItem>

         <MarqueeItem>
            The Wright Brothers
         </MarqueeItem>

         <MarqueeItem>
            Block O
         </MarqueeItem>

         <MarqueeItem>
            Neil Armstrong
         </MarqueeItem>

         <MarqueeItem>
            John Glenn
         </MarqueeItem>

         <MarqueeItem>
            Carmen Ohio
         </MarqueeItem>

         <MarqueeItem>
            Brutus Buckeye
         </MarqueeItem>

       </Marquee>
    </MarqueeContainer>
  )
}
