import styled from 'styled-components'
import { StyledLink } from '../StyledLink'
import Img from 'gatsby-image'

export const ProductTileWrapper = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`;

export const ProductImage = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: absolute;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        filter: brightness(100%);
    }
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    >${StyledLink} {
        border: 1px solid black;
        text-decoration: none;
        position: absolute;
        top: 420px;
        font-size: .85rem;
        padding: 10px;
        text-align: center;
        font-weight: bold;
        color: black;
    }

    @media screen and (max-width: 280px) {
        padding: 0 1rem;
    }
`

export const ProductTextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 100px;
`

export const Title = styled.div`
    font-weight: 400;
    font-size: 1rem;
    margin-left: 0.5rem;
`;

export const Description = styled.div`
    color: #999;
    text-align: left;
    padding: 0 20px 10px 20px;
`;

export const Price = styled.div`
    font-style: italic;
    padding: 20px;
    font-weight: bold;
    margin-top: auto;
`;