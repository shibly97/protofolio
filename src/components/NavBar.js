import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button}  from './Button';
import './NavBar.css';


const NavBar = () => {

    const [click,setClick] = useState(false)
    const [button,setbutton] = useState(true)

    // to show bar and close icons
    const handleClick = () =>{
        console.log("clicked")
        setClick(!click)}

    const closeMobileMenu = () =>{ setClick(false)}

    // this is for buttons which are outside of <ul>
    const showButton = () =>{
        if(window.innerWidth <= 960){
            setbutton(false);
        }else{
            setbutton(true);
        }
    }    
    // when we changing the browser size this will listen when the size go to mobile width 
    window.addEventListener('resize', showButton)
    useEffect(()=>{
        showButton()
    },[])

    return (
     <nav className='navbar'>
         <div className='navbar-container'>
             <Link to="/protofolio" className='navbar-logo'>
                 Protofolio
             </Link>
             <div className='menu-icon' onClick={handleClick}>
                 <i className={click? 'fa fa-times' : 'fa fa-bars'}></i>
             </div>
             <ul className={click? 'nav-menu active' : 'nav-menu'}>
                 <li className='nav-item'>
                     <Link to='/protofolio' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                 </li>
                 <li className='nav-item'>
                     <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>Projects</Link>
                 </li>
                 <li className='nav-item'>
                     <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>Contact</Link>
                 </li>
                 <li className='nav-item'>
                     <Link to='/dcv' className='nav-links-mobile' onClick={closeMobileMenu}>Download CV</Link>
                 </li>
             </ul>
             {/* if the button is true */}
             {button && <Button to='/contact' buttonStyle='btn--outline'>Contact</Button>}
             {button && <Button to='/dcv' buttonStyle='btn--outline'>Download CV</Button>}
         </div>
     </nav>
    )
}

export default NavBar
