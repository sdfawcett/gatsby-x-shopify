import React from 'react';
import { Nav, NavLink } from './styles';
import { Cart } from '../Cart';
import { Logo } from '../Logo';
import { Search } from '../Search';


export function Header() {
    return (
        <Nav>
            <NavLink to='/'>
                <Logo />
            </NavLink>

            <span>
                <Search />
            </span>
            
            <Cart />
        </Nav>
    );
}