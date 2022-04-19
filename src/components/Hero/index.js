import React from 'react'
import 
{ 
   HeroContainer, 
   HeroBg, 
   VideoBg, 
   HeroContent, 
   HeroItems, 
   HeroH1, 
   HeroP, 
} 
from './styles'
import HeroVideo from '../../images/videos/ditc-1.mp4'
import {StyledLink} from '../StyledLink'

export default function Hero() {
  return (
    <HeroContainer>

       <HeroBg>
          <VideoBg src={HeroVideo} type='video/mp4' autoPlay loop muted playsInline />
       </HeroBg>

       <HeroContent>
         <HeroItems>
            <HeroH1>Unreal Destinations</HeroH1>
            <HeroP>Out of this world</HeroP>
            
            <StyledLink to='/all-products'>
                View Products
            </StyledLink>            
         </HeroItems>
       </HeroContent>

    </HeroContainer>
  )
}
