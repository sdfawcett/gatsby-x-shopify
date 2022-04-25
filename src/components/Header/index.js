import React, { useState, useEffect } from 'react';
import { NavTrans, NavBg, NavLink } from './styles';
import { Cart } from '../Cart';
import { Logo } from '../Logo';
import { Search } from '../Search';


export function Header({ toggle }) {

    //nav opacity change on scroll
    const [clientWindowHeight, setClientWindowHeight] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 50) {
        setClientWindowHeight(true)
        } else {
        setClientWindowHeight(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll); 
        
    });

    return (
        <>
        {
            !clientWindowHeight ? 
            <NavTrans>
                <NavLink to='/'>
                    <Logo />
                </NavLink>

                <span>
                    <Search />
                </span>
                
                <Cart toggle={toggle} />
            </NavTrans> :

            <NavBg>
                <NavLink to='/'>
                    <Logo />
                </NavLink>

                <span>
                    <Search />
                </span>
                
                <Cart toggle={toggle} />
            </NavBg>
        }
        </>

        
    );
}