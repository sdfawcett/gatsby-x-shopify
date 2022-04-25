import styled from 'styled-components';
import {Link} from 'gatsby';

export const NavTrans = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: space-between;
    margin: -80px auto 0 auto;
    padding: 0.5rem 2rem;
    box-sizing: border-box;
    z-index: 100;
    position: sticky; 
    top: 0;

    >span {
        margin: auto 0;

        @media(max-width: 768px) {
            display: none;
        }
    }
`;

export const NavBg = styled.nav`
    background: rgb(255, 255, 255, 0.3);
    height: 80px;
    display: flex;
    justify-content: space-between;
    margin: -80px auto 0 auto;
    padding: 0.5rem 2rem;
    box-sizing: border-box;
    z-index: 100;
    position: sticky; 
    top: 0;

    >span {
        margin: auto 0;

        @media(max-width: 768px) {
            display: none;
        }
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`