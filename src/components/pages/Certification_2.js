import React from 'react'
import cs from '../../image/certi/cs.PNG'
import './Certification_1.css'


const Certification_2 = () => { 

    return (
       <div className="cirti">
           <img src={cs}/>

           <div className="verify">Scan QR code for Verify
           </div>

           <div className="cirti-info">
               <p>
               Some main areas covered by this course</p><br/>
               
               <ul className='cirti-list'>

                <li>Recursion with Python</li>
                <li>Searching Algorithms with Python</li>
                <li>Sorting Algorithms with Python</li>
                <li>Complex Data Structures</li>
               </ul><br/>

               <p>For more information, visit <a className='more_info' href="https://www.codecademy.com/profiles/shiblyMohamed">CodeCademy</a></p>

           </div>
           <div className='img-gal'>
           </div>
        </div>
    )
}

export default Certification_2