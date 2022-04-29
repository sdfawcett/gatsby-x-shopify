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

export default function SignupCTA() {
   useEffect(() => {
      Aos.init({})
    }, [])
  return (
      <EmailContainer>
         <EmailContent>
            <h1 data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
               Get Access to Exclusive Offers
            </h1>
            <p data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
               Sign up for your newsletter below to get $100 off your first trip!
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

               </FormWrap>
            </form>
         </EmailContent>
      </EmailContainer>
  )
}
