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
import {StyledLink} from '../StyledLink'

export default function Hero() {
  return (
    <HeroContainer>
       
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