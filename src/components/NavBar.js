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
             <Link to="/" className='navbar-logo'>
                 Protofolio <i className="fa fa-globe" aria-hidden="true"></i>
             </Link>
             <div className='menu-icon' onClick={handleClick}>
                 <i className={click? 'fa fa-times' : 'fa fa-bars'}></i>
             </div>
             <ul className={click? 'nav-menu active' : 'nav-menu'}>
                 <li className='nav-item'>
                     <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                 </li>
                 <li className='nav-item'>
                     <Link to='/' className='nav-links' onClick={closeMobileMenu}>About Me</Link>
                 </li>
                 <li className='nav-item'>
                     <Link to='/' className='nav-links' onClick={closeMobileMenu}>Projects</Link>
                 </li>
                 <li className='nav-item'>
                     <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>Contact</Link>
                 </li>
                 <li className='nav-item'>
                     <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>Download CV</Link>
                 </li>
             </ul>
             {/* if the button is true */}
             {button && <Button buttonStyle='btn--outline'>Contact</Button>}
             {button && <Button buttonStyle='btn--outline'>Download CV</Button>}
         </div>
     </nav>
    )
}

export default NavBar
