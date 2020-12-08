import React from 'react'
import {Link} from 'react-router-dom'

function carditem(props) {
    return (
        <>
           <div className="card-container">
           <Link to="/" className="card-link">
                <div className="card-img">
                    <img  alt="Certificate" src={props.src}></img>
                </div>
                <div className="card-info">
                    <h5 className="card-head">
                        {props.head}
                    </h5>
                    <p className="card-date">
                    Issued Date - {props.date}
                    </p>
                    <p className="card-from">
                    Issued By - {props.from}
                    </p>
            </div>
           </Link>
           </div>
          
        </>
    )
}

export default carditem
