import React from 'react';
import './Header.css';
import Logo from '../images/logo.png';

const Header = ({ handleStyleAI, show3DModel }) => {
    return (
        <header className="header">
            <img alt="SBS logo" src={Logo} className="logo" />
            <nav className="nav">
                <ul className="nav-list">
                    {!show3DModel && (
                        <>
                            <li><button className="nav-btn">HOME</button></li>
                            <li><button className="nav-btn" onClick={handleStyleAI}>STYLEAI</button></li>
                            <li><button className="nav-btn">CONTACT US</button></li>
                        </>
                    )}
                    {show3DModel && (<li><button className="nav-btn" onClick={handleStyleAI}>EXIT</button></li>)}
                </ul>
            </nav>
            {/* <div className="icons">
                <i className="fas fa-user"></i>
                <i className="fas fa-search"></i>
            </div> */}
        </header>
    );
};

export default Header;
