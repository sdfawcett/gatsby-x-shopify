import React, { useEffect } from 'react'
import 
{ 
   HeroContainer, 
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
import Aos from "aos"
import "aos/dist/aos.css"
import {StyledLink} from '../StyledLink'

export default function Hero() {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])
  return (
    <HeroContainer>
       
       <HeroContent>
         <HeroItems>
            <HeroH1 data-aos="fade-right">
              <h1>The Great State of Ohio</h1>
            </HeroH1>
            <HeroP data-aos="fade-right">
              <p>Celebrate the 17th state in all of its glory with our Ohio-themed apparel and merch.</p>
            </HeroP>
            
            <StyledLink data-aos="fade-right" to='/all-products'>
                View Products
            </StyledLink>        



            <HeroInfo>

              <QuoteWrapper data-aos="fade-up-left" data-aos-delay="100">
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