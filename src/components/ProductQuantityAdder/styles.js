import styled from 'styled-components';

export const ProductQuantityAdderWrapper = styled.div`
    margin-top:20px;
    width: 60%;

    @media(max-width: 600px) {
            width: 100%;
        }

    >strong {
        display: block;
        margin-bottom: 10px;
    }

    >form {
        display: flex;
    }
`;