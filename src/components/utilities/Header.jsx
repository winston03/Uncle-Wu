import React from 'react'
import logo from '../../assets/image/whiteunclewu.png'

const Header = () => {
    return (
        <div className='fixed top-0 left-0 right-0 w-full h-[8vh] flex sm:justify-center items-center'>
            <img src={logo} alt="logo" className='sm:w-[20%]' />
        </div>
    )
}

export default Header