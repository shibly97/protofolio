import React from 'react'
import  '../App.css'
import './HeroSection.css'
import {Button} from './Button'
import video from '../video/video-1.mp4'
import profile from '../image/pic-3.jpg'
import {Link} from 'react-router-dom'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={video} autoPlay loop muted></video>
            <img id='profile-img' src={profile} alt='profile'/>
            <div className = 'hero-btns'>
            <Link to='/about'>
                <Button to='about' className='btns' buttonStyle='btn--hero' buttonSize='btn--ex-large'>About Me</Button></Link>
            </div>
        </div>
    )
}

export default HeroSection
