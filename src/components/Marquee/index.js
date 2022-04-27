import React from 'react'
import Marquee from "react-fast-marquee";
import 
{ 
   MarqueeContainer,
   MarqueeCard,
   MarqueeText
} 
from './styles'

export default function FastMarquee() {
  return (
    <MarqueeContainer>
       <Marquee pauseOnHover={true} gradient={false} speed={40} loop={0}>

         <MarqueeCard>
            <MarqueeText>
               This is some text.
            </MarqueeText>
         </MarqueeCard>

         <MarqueeCard>
            <MarqueeText>
               This is some text.
            </MarqueeText>
         </MarqueeCard>

         <MarqueeCard>
            <MarqueeText>
               This is some text.
            </MarqueeText>
         </MarqueeCard>

         <MarqueeCard>
            <MarqueeText>
               This is some text.
            </MarqueeText>
         </MarqueeCard>

         <MarqueeCard>
            <MarqueeText>
               This is some text.
            </MarqueeText>
         </MarqueeCard>

         <MarqueeCard>
            <MarqueeText>
               This is some text.
            </MarqueeText>
         </MarqueeCard>

         <MarqueeCard>
            <MarqueeText>
               This is some text.
            </MarqueeText>
         </MarqueeCard>
       </Marquee>
    </MarqueeContainer>
  )
}
