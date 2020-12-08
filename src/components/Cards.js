import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Certifications</h1>
            <div className="cards-container">
                <div className="cards__wrapper">
                        <Carditem src="/image/codecademy.PNG" head="Computer Science Certification" date="March 2020" from="Codecademy"/>
                </div>
                <div className="cards__wrapper">
                        <Carditem src="/image/freecodecamp.jpg" head="Full-Stack developer Certification" date="Novermber 2020" from="freecodecamp.org"/>
                </div>
                <div className="cards__wrapper">
                        <Carditem src="/image/codecademy.PNG" head="Data Science Related Certifications" date="Novermber 2020" from="codecademy"/>
                </div> 
            </div>
        </div>
    )
}

export default Cards
