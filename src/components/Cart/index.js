import React from 'react';
import { CartWrapper } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from 'context/CartContext';

export function Cart({ toggle }) {
    const {checkout} = React.useContext(CartContext);
    console.log(checkout);
    let totalQuantity = 0;

    if (checkout) {
        checkout.lineItems.forEach(lineItem => {
            totalQuantity = totalQuantity + lineItem.quantity;
        })
    }

    return (
    <CartWrapper onClick={toggle}>
        <FaShoppingCart size="1.5em" />
        <div className='dt-cart-info'>
            {totalQuantity} item(s) / ${checkout?.totalPrice || '0.00'}
        </div>

        <div className='mobile-cart-info'>
            {totalQuantity}
        </div>
    </CartWrapper>
    );
}