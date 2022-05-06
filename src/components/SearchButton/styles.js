import styled, { css } from 'styled-components';

const fullWidthStyles = ({fullWidth}) => {
    if (fullWidth) {
        return css`
            display: block;
            width: 100%;
        `
    }
}

export const SearchButton = styled.button`
    outline: none;
    padding: 0 10px;
    height: 44px;
    box-shadow: none;
    font-size: 16px;
    font-family: 'Commissioner', sans-serif;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    background: white;
    color: #bb0000;
    border: 1px solid #262626;
    position: relative;
    white-space: nowrap;
    transition: all .1s ease-in;
    ${fullWidthStyles}

    &:hover:not(:disabled) {
        color: white;
        background: #262626;
    }




    &:disabled {
        border-color: #999;
        cursor: not-allowed;
        color: #999;
    }
`;