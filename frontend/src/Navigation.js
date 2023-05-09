import React, { useState, useContext } from "react";
import { NavContext } from "./App"

const Navigation = () => {

    const { setNavState } = useContext(NavContext);
    const [isHovering, setIsHovering] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleMouseClick = () => {
        setIsHovering(true);
    };

    const handleMenuClick = () => {
        setNavState(prevState => !prevState);
        setShowNav(!showNav);
        setIsActive(!isActive);
    };
    
    return (
        <header id='head'>
            <div id='logo'>
                <img src='./Photos/logo.PNG' alt='Gustavo logo' id='logo-img' className={isHovering ? 'l-spin' : ''} onClick={handleMouseClick}/>
            </div>
            <button className={`menu-icon ${isActive ? "active" : ""}`} onClick={handleMenuClick}>
                <span className="menu-img"></span>
            </button>
            <nav id='nav' className={showNav ? 'show' : ''}>
                <a className='nav-link link tab' href='/' >Home</a>
                <a className='nav-link link tab' href='/about'>About</a>
                <a className='nav-link link tab' href='/projects'>Projects</a>
                <a className='nav-link link tab' href='/contact'>Contact</a>
            </nav>
        </header>
    );
}

export default Navigation;