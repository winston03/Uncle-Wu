import Header from "../utilities/Header"
import React, { useEffect, useState } from 'react';
import circle from '../../assets/image/circle.png'
import nasgor from '../../assets/image/homebg.png'
import { Link } from 'react-router-dom'
import '../styles/CustomScrollBar.css'


const MenuPage = () => {

    const [rotateValue, setRotateValue] = useState(0);

    // Function to handle scroll event
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setRotateValue(scrollPosition / 30); // Adjust rotation sensitivity
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="::-webkit-scrollbar :">
            <Header />
            <div className="w-full h-screen bg-cover bg-center flex flex-col justify-center font-inter items-center bg-no-repeat bg-menubg">
                <div className="flex w-64 h-64 rounded-full bg-cover bg-center justify-center items-center" style={{ backgroundImage: `url(${circle})`, transform: `rotate(${rotateValue}deg)`, transition: 'transform 0.5s ease-out' }}>
                    <Link style={{ transform: "none !important" }}><img className="rounded-full w-36 h-36" src={nasgor} alt="" /></Link>
                </div>
            </div>
            <div className="h-screen"></div>
        </div>
    )
}

export default MenuPage