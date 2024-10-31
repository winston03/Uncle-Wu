import React, { useState, useEffect } from 'react'
import logo from '../../assets/image/whiteunclewu.png'
import Hamburger from './Hamburger'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const links = ["Home", "Our Story", "Menu", "Contact"];

    return (
        <>
            {/* Mobile View */}
            <div className="h-20 fixed top-0 left-0 w-full flex items-center justify-center">
                <img src={logo} width={100} alt="" />
                <Hamburger fixed="fixed right-10 z-10" onClick={handleToggle} />
                <nav className='flex h-screen w-full gap-10 top-0 left-0 bg-black/50 backdrop-blur-md flex-col absolute justify-center items-center'>
                    {links.map((link, index) => (
                        <NavLink key={index} to={`/${link.toLowerCase().replace(" ", "-")}`} className="nav-link">{link}</NavLink>
                    ))}
                </nav>
            </div>

            {/* Tablet View */}
            {/* Desktop View */}
        </>
    )
}

export default Header