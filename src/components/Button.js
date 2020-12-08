import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline','btn--hero']

const SIZE = ['btn--medium', 'btn--large','btn--ex-large']

// just giving sytles as what we need to the button
export const Button = ({
    children, type,onClick,buttonStyle,buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle : STYLES[0];
    const checkButtonSize = SIZE.includes(buttonSize)? buttonSize : SIZE[0] 

    return <Link to='/contact' className='btn-mobile'>
        <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick = {onClick}
        type = {type}
        >
        {children}
        </button> 

        {/*When we need to call a button we call this butoon component. and then <Botton>Projects</Button> no here project is the children */}
    </Link>

}