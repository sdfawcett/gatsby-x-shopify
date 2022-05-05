import styled from 'styled-components';

export const ProductsGridWrapper = styled.section`
    display: grid;
    margin-bottom: 4rem;
    grid-gap: 5px;
    grid-template-columns: 1fr;

    @media(min-width: 384px) {
        grid-template-columns: 1fr 1fr;
    }

    @media(min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;