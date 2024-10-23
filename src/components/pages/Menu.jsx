import Header from "../utilities/Header"
import React, { useEffect, useState } from 'react';
import circle from '../../assets/image/circle.png'
import friedrice from '../../assets/image/friedrice.jpg'
import FoodDescription from '../utilities/FoodDescription'
import '../styles/CustomScrollBar.css'
import '../styles/Font.css'
import CircleMove from "../utilities/CircleMove";


const MenuPage = () => {

    const [rotateValue, setRotateValue] = useState(0);

    // Function to handle scroll event
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setRotateValue(scrollPosition / 20); // Adjust rotation sensitivity
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="">
            <Header />
            <div className="w-full h-full bg-fixed bg-cover bg-center flex flex-col justify-center font-inter items-center bg-no-repeat bg-menubg backdrop-blur-2xl">
                <p className="text-white font-kelvinch text-3xl mt-48 mb-36">We Serve..</p>
                <CircleMove
                    rotateValue={rotateValue}
                    imagecircle={circle}
                    image={friedrice}
                    widthcircle="w-[25rem]"
                    heightcircle="h-[25rem]"
                    widthimage="w-[16.5rem]"
                    heightimage="h-[16.5rem]"
                />




            </div>
            <div className="h-screen"></div>

        </div>
    )
}

export default MenuPage