import React from 'react'
import 
{ 
   TestimonialsContainer,
   TopLine,
   Description,
   ContentWrapper,
   ColumnOne,
   TestimonialBody,
   ColumnTwo,
   Images
} 
from './styles'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'

export default function Testimonials() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)|(gif)|(webp)/"}, name: {in: ["testimonial-1", "testimonial-2"]}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <TestimonialsContainer>
       <TopLine>
         Testimonials
       </TopLine>

       <Description>
         What People Are Saying
       </Description>

       <ContentWrapper>
         <ColumnOne>
          <TestimonialBody>
            <IoMdCheckmarkCircleOutline
            css={`
              color: #3fffa8;
              font-size: 2rem;
              margin-bottom: 1rem;
            `}
            /> 
            <h3>Sean Michaels</h3>
            <p>"The greatest experience of my life!"</p>
          </TestimonialBody>
          <TestimonialBody>
            <FaRegLightbulb 
            css={`
              color: #f9b19b;
              font-size: 2rem;
              margin-bottom: 1rem;
              `} /> 
            <h3>Sharon Peters</h3>
            <p>"The greatest trip of my life!"</p>
          </TestimonialBody>
         </ColumnOne>

         <ColumnTwo>

          {
          data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))
          }

         </ColumnTwo>
       </ContentWrapper>
    </TestimonialsContainer>
  )
}
