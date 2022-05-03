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
            <HeroH1>
              <h1>The Great State of Ohio</h1>
            </HeroH1>
            <HeroP>
              <p>Celebrate the 17th state in all of its glory with our Ohio-themed tees and apparel.</p>
            </HeroP>
            
            <StyledLink to='/all-products'>
                View Products
            </StyledLink>            
         </HeroItems>
       </HeroContent>

    </HeroContainer>
  )
}