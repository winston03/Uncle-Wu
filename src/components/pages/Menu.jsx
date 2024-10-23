import Header from "../utilities/Header"
import React, { useEffect, useState } from 'react';
import circle from '../../assets/image/circle.png'
import nasgor from '../../assets/image/homebg.png'
import { Link } from 'react-router-dom'
import '../styles/CustomScrollBar.css'
import '../styles/Font.css'


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
        <div className="font-inter">
            <Header />
            <div className="w-full h-full bg-fixed bg-cover bg-center flex flex-col justify-center font-inter items-center bg-no-repeat bg-menubg backdrop-blur-2xl">
                <p className="text-white font-kelvinch text-3xl mt-48">We Serve..</p>
                <div className="flex justify-center items-center gap-20">
                    <div className="flex w-80 h-80 rounded-full flex-col bg-cover bg-center justify-center items-center" style={{ backgroundImage: `url(${circle})`, transform: `rotate(${rotateValue}deg)`, transition: 'transform 0.5s ease-out' }}>
                        <img src={nasgor} className="!animate-none rounded-full w-[13rem] h-[13rem]" alt="" />
                    </div>
                    <p className="text-white font-inter text-xl w-[40%]">Golden grains of rice, stir-fried with fresh veggies, eggs, and savory seasonings, creating a symphony of flavors in every bite.</p>
                </div>
            </div>

        </div>
    )
}

export default MenuPage