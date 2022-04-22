import styled from 'styled-components';
import {Link} from 'gatsby';

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.5rem;
    box-sizing: border-box;
    z-index: 100;
    position: relative;

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