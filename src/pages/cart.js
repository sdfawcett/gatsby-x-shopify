import React from 'react';
import { LayoutLite, CartContents, SEO } from 'components';

export default function CartPage() {
    return (
    <LayoutLite>
        <SEO title="Cart" description="The M. Hatter Cart" />
        <CartContents />
    </LayoutLite>
    );
}