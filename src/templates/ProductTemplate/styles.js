import styled from 'styled-components';

export const Grid = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 20px;


    >div:first-child {
            border: none;
            padding: 1rem;
            order: 2;
        }

    >div:last-child {
        order: 1;
    }

    @media(min-width: 768px) {
        grid-template-columns: 2fr 1fr;

        >div:first-child {
            order: 2;
            border-left: 1px solid #ccc;
        }

        >div:last-child {
            order: 1;
        }
    }

    @media(max-width: 400px) {

        >div:first-child {
            order: 2;
            max-width: 64%;
        }

        >div:last-child {
            order: 1;
            max-width: 60%;
        }
    }

`;

export const SelectWrapper = styled.div`
    margin: 40px 0 10px 0;
    border-bottom: 1px solid #ccc;
    padding-bottom: 2rem;

    >strong {
        display: block;
        margin-bottom:8px;
    }
`;

export const ProductInfoWrapper = styled.div`
    max-width: 40rem;

    h1 {
        font-family: 'Merriweather', serif;
        font-size: 2rem;
    }

    @media(max-width: 400px) {
        h1 {
        font-size: 1.5rem;
    }
    }

    p {
        margin-bottom: 2rem;
        font-family: 'Commissioner', sans-serif;
    }
`;

export const ProductControlsWrapper = styled.div`
    margin-bottom: 40px;
`;


export const Price = styled.div`
    margin-top: 40px 0;
    font-weight: bold;
    font-size: 30px;
`;

export const NavWrapper = styled.div`
    @media(max-width: 600px) {
        width: 100%;

        >button {
            width: 100%;
        }
    }
`;