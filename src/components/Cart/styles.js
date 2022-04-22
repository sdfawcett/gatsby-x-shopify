import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CartWrapper = styled(StyledLink).attrs(() => ({
    to: '/cart',
}))`
    display: flex;
    color: black;
    text-decoration: none;
    padding-left: 16px;

    >svg {
        margin: auto 0;
    }

    >div:last-child {
        padding-left:8px;
        margin: auto 0;
    }

    &:hover {
        text-decoration: underline;
    }

    

    >.dt-cart-info {

        margin: auto 0 auto .4rem;

        @media(max-width: 768px) {
        display: none;
    }

    }

    >.mobile-cart-info {

        @media(min-width: 768px) {
        display: none;
        }

    }
`;