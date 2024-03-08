import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link, Button } from 'react-scroll'
import { FaAlignRight } from "react-icons/fa6";

const Navbar = () => {

    const [menuMobile, setMenuMobile] = useState(false)
    const toggleMenu = () => {
        menuMobile ? setMenuMobile(false) : setMenuMobile(true)
    }

    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, []);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo' />
            <ul className={menuMobile ? '' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth="true" offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth="true" offset={-260} duration={500}>Program</Link></li>
                <li><Link to='about' smooth="true" offset={-150} duration={500}>About us</Link></li>
                <li><Link to='campus' smooth="true" offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth="true" offset={-260} duration={500}>Testimonials</Link></li>
                <li><Button to='contact' smooth="true" offset={-260} duration={500} className='btn'>Contact us</Button></li>
            </ul>
            <FaAlignRight className='menu-icon' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar