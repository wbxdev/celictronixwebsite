import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/wlogo_cr.svg';
import './navbar.css';

// BEM -> block elemnt modifier
const Menu = () => (
    <>
    <p><a href="#Home">Home</a></p>
    <p><a href="#WhatWBX">What Is Celictronix?</a></p>
    <p><a href="#Possibility">Open AI</a></p>
    <p><a href="#Feature">Case Studies</a></p>
    <p><a href="#Blog">Library</a></p>
    </>
)
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='wbx__navbar'>
            <div className='wbx__navbar-links'>
                <div className='wbx__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='wbx__navbar-links_container'>
                    <Menu />
                </div>
            </div>    
            <div className="wbx__navbar-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>     
            </div>   
            <div className= "wbx__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color = "#fff" size={27} onClick={() => setToggleMenu(false)}/>                
                    : <RiMenu3Line color = "#fff" size={27} onClick={() => setToggleMenu(true)}/>   
            }
            {toggleMenu && (
                <div className='wbx__navbar-menu_container scale-up-center'>
                    <div className='wbx__navbar-menu_container-links'>
                        <Menu/>
                        <div className="wbx__navbar-menu_container-links-sign">
                            <p>Sign In</p>
                            <button type="button">Sign Up</button>     
                        </div>  
                    </div>
                </div>
                )
            }
            </div>
        </div>
    )
}

export default Navbar