import React from 'react'
import 
{ 
   CartDrawerContainer,
   DrawerButtonWrap,
   CloseIcon,
   CartContentWrapper,
   CartContentMenu,
   CartDrawerLink,
   BtnWrap,
   CartHeading,
   CartItem,
   CartHeader,
   CartFooter,
   Footer
} 
from './styles'
import CartContext from 'context/CartContext'
import { QuantityAdjuster } from '../QuantityAdjuster'
import { RemoveLineItem } from '../RemoveLineItem'
import { navigate } from '@reach/router'
import { Button } from '../Button'

export default function CartDrawer({ isOpen, toggle }) {

  const {checkout, updateLineItem} = React.useContext(CartContext);
  const handleAdjustQuantity = ({quantity, variantId}) => {
      updateLineItem({quantity, variantId});
  };

  return (
    <CartDrawerContainer isOpen={isOpen}>

      <DrawerButtonWrap onClick={toggle}>
        <CloseIcon />
      </DrawerButtonWrap>

      <CartContentWrapper>
      <section>
            <CartHeading>
                Your Cart
            </CartHeading>

            {!!checkout?.lineItems && (
            <CartHeader>
                <div>Product</div>
                <div>Unit Price</div>
                <div>Quantity</div>
                <div>Amount</div>
            </CartHeader>
            )}

            {checkout?.lineItems?.map(item => ( 
                <CartItem key={item.variant.id}>
                    <div>
                        <div>
                            {item.title}
                        </div>
                        <div>
                            {item.variant.title === 'Default Title' ? '' : item.variant.title}
                        </div>
                    </div>
                    <div>
                        ${item.variant.price}
                    </div>
                    <div>
                        <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity} />
                    </div>
                    <div>
                        ${(item.quantity * item.variant.price).toFixed(2)}
                    </div>
                    <div>
                        <RemoveLineItem lineItemId={item.id} />
                    </div>
                </CartItem>
            ))}

            {!!checkout?.lineItems && (
            <CartFooter>
                <div>
                    <strong>Total:</strong>
                </div>
                <div>
                    <span>${checkout?.totalPrice}</span>
                </div>
            </CartFooter>
            )}
            {!checkout?.lineItems &&
                <h4>
                    Your cart is empty.
                </h4>
            }
            <Footer>
                <div>
                    <Button onClick={toggle}>
                        Continue shopping
                    </Button>
                </div>
                <div>
                    {!!checkout?.webUrl && (
                        <Button onClick={() => {
                            window.location.href = checkout.webUrl;
                        }}
                        >
                            Checkout
                        </Button>
                    )}
                </div>
            </Footer>
        </section>
      </CartContentWrapper>

    </CartDrawerContainer>
  )
}