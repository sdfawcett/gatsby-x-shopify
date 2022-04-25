import React from 'react'
import 
{ 
   CartDrawerContainer,
   DrawerButtonWrap,
   CloseIcon,
   CartContentWrapper,
   CartContentMenu,
   CartDrawerLink,
   BtnWrap
} 
from './styles'

export default function CartDrawer({ isOpen, toggle }) {
  return (
    <CartDrawerContainer isOpen={isOpen} onClick={toggle}>

      <DrawerButtonWrap onClick={toggle}>
        <CloseIcon />
      </DrawerButtonWrap>

      <CartContentWrapper>
        <CartContentMenu>

            <CartDrawerLink>

            </CartDrawerLink>
       
        </CartContentMenu>
        <BtnWrap>

        </BtnWrap>
      </CartContentWrapper>

    </CartDrawerContainer>
  )
}