import React, { useState, useContext } from "react";
import { NavContext } from "./App"

const Navigation = () => {

    const { setNavState } = useContext(NavContext);
    const [isHovering, setIsHovering] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const handleMenuClick = () => {
        setNavState(prevState => !prevState);
        setShowNav(!showNav);
    };
    
    return (
        <header id='head'>
            <div id='logo'>
                <img src='./Photos/logo.PNG' alt='Gustavo logo' id='logo-img' className={isHovering ? 'l-spin' : ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
            </div>
            <button className="menu-icon" onClick={handleMenuClick}>Menu</button>
            <nav id='nav' className={showNav ? 'show' : ''}>
                <a id='nav-link' className='link tab' href='/' >Home</a>
                <a id='nav-link' className='link tab' href='/about'>About</a>
                <a id='nav-link' className='link tab' href='/projects'>Projects</a>
                <a id='nav-link' className='link tab' href='/contact'>Contact</a>
            </nav>
        </header>
    );
}

export default Navigation;