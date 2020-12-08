import React from 'react'
import  '../App.css'
import './HeroSection.css'
import {Button} from './Button'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='/video/video-1.mp4' autoPlay loop muted></video>
            <img id='profile-img' src='/image/pic-3.jpg' alt='profile'></img>
            <div className = 'hero-btns'>
                <Button className='btns' buttonStyle='btn--hero' buttonSize='btn--ex-large'>About Me</Button>
            </div>
        </div>
    )
}

export default HeroSection
