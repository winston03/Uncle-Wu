import React, { useState, useEffect } from 'react'
import logo from '../../assets/image/whiteunclewu.png'
import Hamburger from './Hamburger'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const links = ["Home", "Our Story", "Menu", "Contact"];
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className=''>
            {/* Mobile View */}
            <div className="h-20 fixed top-0 left-0 w-full flex items-center justify-center">
                <img src={logo} width={100} alt="" />
                <Hamburger
                    onClick={handleToggle}
                    fixed="fixed right-5 z-10"
                    top={`${toggle ? "rotate-45 top-1/2" : "rotate-0 top-0"} transition-all ease-in-out duration-500 absolute`}
                    bottom={`${toggle ? "-rotate-45 bottom-1/2" : "rotate-0 bottom-0"} transition-all ease-in-out duration-500 absolute`}
                />

                <nav className={`${toggle ? "opacity-100 top-0 left-0" : "opacity-0 -top-56"} delay-100 transition-all ease-in-out duration-700 fixed w-full gap-10 h-screen backdrop-blur-xl flex flex-col items-center justify-center`}>
                    {
                        links.map((link, index) => {
                            return (
                                <NavLink
                                    to={`${link === 'Home' ? '/' : `/${link.toLowerCase().replace(" ", "-")}`}`}
                                    key={index}
                                    className="nav-link"
                                >
                                    {link}
                                </NavLink>
                            )
                        })
                    }
                </nav>
            </div >

            {/* Tablet View */}
            {/* Desktop View */}
        </div>
    )
}

export default Header