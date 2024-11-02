import React from 'react'

const Hamburger = (props) => {
    return (
        <div className={`w-[25px] h-[12px] flex flex-col justify-between cursor-pointer ${props.fixed}`} onClick={props.onClick}>
            <div className={`block border border-white w-full bg-white rounded-full ${props.top}`}></div>
            <div className={`block border border-white w-full bg-white rounded-full ${props.bottom}`}></div>
        </div>
    )
}

export default Hamburger