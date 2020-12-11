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
                        <Carditem src={fcc} head="Full-Stack developer Certification" to="/certi_1" date="Novermber 2020" from="freecodecamp.org"/>
                </div>
                <div className="cards__wrapper">
                        <Carditem src={codecademy} 
                        to="/certi_2" head="Computer Science Certification" date="July 2020" from="Codecademy"/>
                </div>
                <div className="cards__wrapper">
                        <Carditem src={codecademy} head="Data Science Related Certifications"  to="/certi_3" date="August 2020" from="codecademy"/>
                </div> 
            </div>
        </div>
    )
}

export default Cards
