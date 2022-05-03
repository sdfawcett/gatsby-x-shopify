import React, { useState, useEffect } from 'react';
import { NavTrans, NavBg, NavLink, LogoContainer } from './styles';
import { Cart } from '../Cart';
import CowtownLogoDark from '../../images/svg/cowtown-logo-dark-cropped.svg';
import { Search } from '../Search';


export function HeaderLite({ toggle }) {

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
                <LogoContainer>
                    <CowtownLogoDark />
                </LogoContainer>
                </NavLink>

                <span>
                    <Search />
                </span>
                
                <Cart toggle={toggle} />
            </NavTrans> :

            <NavBg>
                <NavLink to='/'>
                <LogoContainer>
                    <CowtownLogoDark />
                </LogoContainer>
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