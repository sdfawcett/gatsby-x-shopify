import React from 'react'
import 
{ 
   BgWrapper,
   BgImg,
   Content
} 
from './styles'

export default function HeroBg({ fluid, title, height, mobileHeight, className, children }) {
  return (
    <BgWrapper>
       <BgImg
         fluid={fluid}
         title={title}
         height={height}
         mobileHeight={mobileHeight}
       />
       <Content className={className}>{children}</Content>
    </BgWrapper>
  )
}

