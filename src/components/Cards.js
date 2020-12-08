import React from 'react'
import Carditem from './Carditem'
import './Cards.css'
import codecademy from '../image/codecademy.PNG'
import fcc from "../image/freecodecamp.jpg"


function Cards() {
    return (
        <div className='cards'>
            <h1>Certifications</h1>
            <div className="cards-container">
                <div className="cards__wrapper">
                        <Carditem src={codecademy} head="Computer Science Certification" date="March 2020" from="Codecademy"/>
                </div>
                <div className="cards__wrapper">
                        <Carditem src={fcc} head="Full-Stack developer Certification" date="Novermber 2020" from="freecodecamp.org"/>
                </div>
                <div className="cards__wrapper">
                        <Carditem src={codecademy} head="Data Science Related Certifications" date="Novermber 2020" from="codecademy"/>
                </div> 
            </div>
        </div>
    )
}

export default Cards
