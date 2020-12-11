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
          From this course I more about SQL and Python — two languages that are loved by data scientists. Plus, techniques for gathering, cleaning, analyzing, and visualizing data, using real datasets provided to Codecademy by Warby Parker, Twitch, Hacker News, Yelp, and more. </p><br/>

          <p>Some main areas covered by this course</p><br/>
               
               <ul className='cirti-list'>

                <li>Web scrapping with beautiful soap</li>
                <li>Clean Data with Python</li>
                <li>Statistic with NumPy</li>
                <li>Data Analysis with Python</li>
               </ul><br/>

               <p>For more information, visit <a className='more_info' href="https://www.codecademy.com/profiles/shiblyMohamed">CodeCademy</a></p>
        
            </div>
            <div className='img-gal'>

            </div>
        </div>
    )
}

export default Certification_3