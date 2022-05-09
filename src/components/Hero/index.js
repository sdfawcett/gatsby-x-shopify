import React from 'react'
import 
{ 
   HeroContainer, 
   HeroBg, 
   VideoBg, 
   QuoteWrapper,
   QuoteBody,
   QuoteQMark,
   QuoteBase,
   BlockQuote,
   HeroInfo,
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
              <p>Celebrate the 17th state in all of its glory with our Ohio-themed apparel and merch.</p>
            </HeroP>
            
            <StyledLink to='/all-products'>
                View Products
            </StyledLink>        



            <HeroInfo>

              <QuoteWrapper>
                <QuoteBody>
                  <QuoteQMark>&rdquo;</QuoteQMark>
                  <QuoteBase>
                    <BlockQuote>Courage: a perfect sensibility of the measure of danger, and a mental willingness to endure it. <cite>- William Tecumseh Sherman</cite></BlockQuote>
                  </QuoteBase>
                </QuoteBody>
              </QuoteWrapper> 

            </HeroInfo>   
         </HeroItems>
       </HeroContent>

    </HeroContainer>
  )
}