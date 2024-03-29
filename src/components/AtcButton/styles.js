import styled, { css, keyframes } from 'styled-components';

const fullWidthStyles = ({fullWidth}) => {
    if (fullWidth) {
        return css`
            display: block;
            width: 100%;
        `
    }
}

const sheen = keyframes`
    100% {
            transform: rotateZ(60deg) translate(1em, -9em);
        }
`;

export const Button = styled.button`
    outline: none;
    padding: 0 10px;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    font-family: 'Commissioner', sans-serif;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    border: 1px solid #262626;
    white-space: nowrap;
    background: #bb0000;
    position: relative;
    overflow: hidden;
    box-shadow:-2px 2px 2px #ccc;
    ${fullWidthStyles}

    &::after {
        content: '';
        position: absolute;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        background: linear-gradient(to bottom, rgba(229, 172, 142, 0), rgba(255,255,255,0.5) 50%, rgba(229, 172, 142, 0));
        transform: rotateZ(60deg) translate(-5em, 7.5em);
        animation: ${sheen} 4s forwards infinite;
    }

    &:hover:not(:disabled) {
        color: white;
        background: #700000;
        border: 1px solid rgba(0, 0, 0, 0);
    }

    &:disabled {
        border-color: #999;
        cursor: not-allowed;
        color: #999;
    }
`;