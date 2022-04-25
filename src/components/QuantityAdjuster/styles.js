import styled from 'styled-components';

export const QuantityAdjusterWrapper = styled.div`
    display:flex;

    >div {
        margin: auto 0;
        padding: 5px 10px;
    }
`;

export const AdjusterButton = styled.div`
    cursor: pointer;
    border: 1px solid black;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 5px;
    font-weight: bold;
    background-color: #E1E8EE;
    color: black;
`;