import React from 'react'
import full from '../../image/certi/full.PNG'
import './Certification_1.css'


const Certification_1 = () => { 

    return (
       <div className="cirti">
           <img src={full}/><div>
           <a href="https://www.freecodecamp.org/certification/fcccc5a0291-4d77-48e5-9cdb-0254a6f09c30/full-stack
"><button className="verify">Verify</button></a>
           </div>
           <div className="cirti-info">
          <p>
            There are main six freeCodeCamp certificates:

            Upon completion of all six certificates, the freeCodeCamp Full Stack Development Program Certificate will be issued. This final distinction signifies completion of approximately 1,800 hours of coding with exposure to a wide range of web development tools. </p><br/>

            <p>To verify each certification click below</p><br/>

            <ul className='cirti-list'>
                <li><a href="https://www.freecodecamp.org/certification/fcccc5a0291-4d77-48e5-9cdb-0254a6f09c30/responsive-web-design">Responsive Web Design</a></li> 
                <li><a href="https://www.freecodecamp.org/certification/fcccc5a0291-4d77-48e5-9cdb-0254a6f09c30/javascript-algorithms-and-data-structures">Algorithms and Data Structure</a></li>
                <li><a href="https://www.freecodecamp.org/certification/fcccc5a0291-4d77-48e5-9cdb-0254a6f09c30/front-end-libraries">Front End Libraries</a></li>
                <li><a href="https://www.freecodecamp.org/certification/fcccc5a0291-4d77-48e5-9cdb-0254a6f09c30/data-visualization">Data Visualization</a></li>
                <li><a href="https://www.freecodecamp.org/certification/fcccc5a0291-4d77-48e5-9cdb-0254a6f09c30/apis-and-microservices">APIs and Microservices</a></li>
                <li><a href="https://www.freecodecamp.org/certification/fcccc5a0291-4d77-48e5-9cdb-0254a6f09c30/information-security-and-quality-assurance">Information Security and Quality Assurance</a></li>
            </ul><br/>

            <p>Each certificate curriculum includes 5 required projects. 


            For more information, visit <a className='more_info' href="https://www.freecodecamp.org">freecodecamp</a></p>
        
            </div>
            <div className='img-gal'>

            </div>
        </div>
    )
}

export default Certification_1
