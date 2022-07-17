import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import logo2 from '../../assets/logo2.png';

function Header() {
    return (
        <div className='wbx__header section__padding' id="home">
            <div className='wbx__header-content'>
                <h1 className='gradient__text'>This will be the header! Celictronix!</h1>
                <p>
                    A small summary of what Celictronix is! This should be like the goal or something that will
                    distinguish us from everyone else. Maybe this is too short for the text to become a paragraph. I need more information to be added here. 
                 </p>
                <div className='wbx__header-content__input'>
                    <input type="email" placeholder="your email address"/>
                    <button type="button">Get Started</button>
                </div>
                <div className='wbx__header-content__people'>
                    <img src= {people} alt="people"/>
                    <p>1,600 people requested access </p>
                </div>
            </div>
            <div className='wbx__header-image'>
                <img src={logo2} alt="logo2"/>
            </div>
        </div>
    )
}

export default Header