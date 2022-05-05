import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const ProductTileWrapper = styled.div`
    display: flex;
    border-radius: 5px;
    overflow: hidden;
    flex-direction: column;
    padding: 1rem;
    transition: all .25s ease;
    text-align: center;

    &:hover {
        box-shadow: 0 0 0 rgba(0, 0, 0, .05), 0 0px 10px rgba(0, 0, 0, .08);
        transform: translateY(-5px);
        background-color: white;
    }

    >${StyledLink} {
        text-decoration: none;
    }

    >a {
        text-decoration: none;
    }
`;

export const Title = styled.div`
    font-weight: 400;
    font-size: 20px;
    margin: 20px 20px 0 20px;
    font-family: 'Commissioner', sans-serif;
    color: #333;
`;

export const Description = styled.div`
    color: #999;
    text-align: left;
    padding: 0 20px 10px 20px;
`;

export const Price = styled.div`
    padding: 20px;
    font-weight: 400;
    margin-top: auto;
    color: #333;
`;