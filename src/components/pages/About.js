import React from 'react'
import cover from '../../image/pic-1.jpg'
import './Certification_1.css'


const About = () => { 

    return (
       <div className="cover">
           <img src={cover}/>
           <div className="cirti-info">
          <p>
            There are main six freeCodeCamp certificates:

            Upon completion of all six certificates, the freeCodeCamp Full Stack Development Program Certificate will be issued. This final distinction signifies completion of approximately 1,800 hours of coding with exposure to a wide range of web development tools. </p><br/>

            <ul>
            <li>Responsive Web Design</li> 
            <li>Algorithms and Data Structure</li>
            <li>Front End Libraries</li>
            <li>Data Visualization</li>
            <li>APIs and Microservices</li>
            <li>Information Security and Quality Assurance</li>
            </ul><br/>

            <p>Each certificate curriculum should take approximately 300 hours to complete and includes 5 required projects. 


            For more information about freeCodeCamp, visit <a href="https://www.freecodecamp.org">freecodecamp</a></p>
        
            </div>
            <div className='img-gal'>

            </div>
        </div>
    )
}

export default About
