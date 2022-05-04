import React, { useEffect } from 'react'
import 
{ 
   EmailContainer,
   EmailContent,
   FormWrap
} 
from './styles'
import Aos from "aos"
import "aos/dist/aos.css"
import {StyledLink} from '../StyledLink'

export default function SignupCTA() {
   useEffect(() => {
      Aos.init({})
    }, [])
  return (
      <EmailContainer>
         <EmailContent>
            <h1 data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
               Win A Cowtown Shopping Spree
            </h1>
            <p data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
               Sign up for our newsletter below to get entered in our yearly shopping spree drawing!
            </p>
            <form action="#">
               <FormWrap
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
               >
                  <label htmlFor="email">
                  <input type="email" placeholder="Enter your email" id="email" />
                  </label>

                  <StyledLink to='/'>
                     I Want Free Stuff
                  </StyledLink> 
               </FormWrap>
            </form>
         </EmailContent>
      </EmailContainer>
  )
}
