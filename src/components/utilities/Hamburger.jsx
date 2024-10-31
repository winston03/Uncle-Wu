import React from 'react'

const Hamburger = (props) => {
    return (
        <div className={`w-[30px] h-[15px] flex flex-col justify-between cursor-pointer ${props.fixed} ${props.onClick}`}>
            <div className="block border border-white bg-white rounded-full"></div>
            <div className="block border border-white bg-white rounded-full"></div>
        </div>
    )
}

export default Hamburger