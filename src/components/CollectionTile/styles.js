import styled, { css } from 'styled-components';
import {StyledLink} from '../StyledLink';

const fullWidthStyles = ({fullWidth}) => {
    if (fullWidth) {
        return css`
            display: block;
            width: 100%;
        `
    }
 }

export const CollectionTileWrapper = styled.div`
    height: 300px;
    max-height: 100vh;
    display: flex;
    position: relative;
    margin: .25rem;

    >div {
        flex-grow: 1;
    }
`;

export const CollectionTileContent = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    color: white;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;

    >div {
        padding: 20px;

    ${StyledLink} {
        outline: none;
        padding: 1rem 0.5rem;
        box-shadow: none;
        font-size: 16px;
        font-family: 'Commissioner', sans-serif;
        cursor: pointer;
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
        background: #bb0000;
        color: white;
        border: 4px solid #333;
        position: relative;
        white-space: nowrap;
        transition: all .1s ease-in;
        ${fullWidthStyles}

        &:hover:not(:disabled) {
            color: white;
            background: #700000;
        }

        &:active:not(:disabled) {
            top: .1rem;
        }

        &:active::after {
            border-top-width: .4rem;
            bottom: -1.15rem;
        }

        &::after {
            content: '';
            height: 0;
            border: .5rem solid transparent;
            border-top-color: #333;
            position: absolute;
            left: -.25rem;
            bottom: -1.25rem;
            display: inline-block;
            width: calc(100% - .5rem);
        }

        &:disabled {
            border-color: #999;
            cursor: not-allowed;
            color: #999;
        }
        }
    }
`;

export const Title = styled.div`
    padding: 5px 10px;
    margin-bottom: 5px;
    display: inline-block;
    text-transform: uppercase;
    font-family: 'Merriweather', serif;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: .2rem;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);
`;

export const Description = styled.div`
    font-size: 20px;
    margin: 10px 10px 2rem 10px;
    font-family: 'Commissioner', sans-serif;
`;