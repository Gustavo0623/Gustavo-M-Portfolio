import React, { useState } from "react";

const Navigation = () => {
    
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    
    return (
        <header id='head'>
            <div id='logo'>
                <img src='./Photos/logo.PNG' alt='Gustavo logo' id='logo-img' className={isHovering ? 'l-spin' : ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
            </div>
            <nav id='nav'>
                <a className='link tab' href='/' >Home</a>
                <a className='link tab' href='/about'>About</a>
                <a className='link tab' href='/projects'>Projects</a>
                <a className='link tab' href='/contact'>Contact</a>
            </nav>
        </header>
    );
}

export default Navigation;