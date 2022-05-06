import styled from 'styled-components';

export const CartWrapper = styled.div`
    display: flex;
    color: #262626;
    text-decoration: none;
    padding-left: 16px;
    color: white;
    cursor: pointer;

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