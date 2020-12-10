import React from 'react'
import statistic from '../../image/certi/statistic.PNG'
import './Certification_1.css'


const Certification_3 = () => { 

    return (
       <div className="cirti">
           <img src={statistic}/><div className="verify">Scan QR code for Verify
           </div>
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

export default Certification_3