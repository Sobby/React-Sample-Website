
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay muted />
            <h1> ADVENTURE   </h1>
            <p>  This is an ADVENTURE</p>
            <div className="hero-btns">
            <Button  className='btns' buttonStyle='btn--outline' 
            buttonSize='btn--large' >Get Started</Button>
            <Button  className='btns' buttonStyle='btn--primary' 
            buttonSize='btn--large' >Watch me <i className='farfa-play-circle'/></Button>
            </div>
        </div>
    )
}

export default HeroSection
