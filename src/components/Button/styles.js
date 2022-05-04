import styled, { css } from 'styled-components';

const fullWidthStyles = ({fullWidth}) => {
    if (fullWidth) {
        return css`
            display: block;
            width: 100%;
        `
    }
}

export const Button = styled.button`
    outline: none;
    padding: 0 10px;
    height: 3rem;
    box-shadow: none;
    font-size: 16px;
    font-family: 'Commissioner', sans-serif;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    background: white;
    color: black;
    border: 4px solid #333;
    position: relative;
    white-space: nowrap;
    transition: all .1s ease-in;
    ${fullWidthStyles}

    &:hover:not(:disabled) {
        color: white;
        background: black;
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
`;