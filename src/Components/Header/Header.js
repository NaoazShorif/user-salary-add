import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <ul>
                <li><a href="/home">HOME</a></li>
                <li><a href="/profile">PROFILE</a></li>
                <li><a href="/services">SERVICES</a></li>
                <li><a href="/contuct us">CONTUCT US</a></li>
            </ul>
            
        </div>
    );
};

export default Header;