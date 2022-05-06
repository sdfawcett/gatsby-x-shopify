import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
    height: 20px;
    width: 20px;
    border: 1px solid #262626;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    background: ${props => (props.checked ? '#262626' : 'none')};

    >div {
        line-height: 1;
        margin: auto;
        visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    }
`;