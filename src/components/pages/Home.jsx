import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Header from '../utilities/Header';
import { Link } from 'react-router-dom'
import React from 'react'
import circle from '../../assets/image/whitecircle.png'

const HomePage = () => {
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Header animation="fade-down" once="true" delay="1500" />
            <div className="w-full h-screen bg-cover bg-center flex flex-col justify-center font-inter items-center bg-no-repeat bg-homebg">
                <div className="flex flex-col gap-3 justify-center items-center phone:px-10">
                    <p data-aos="fade-in" data-aos-once="true" className="tablet:text-5xl phone:text-center phone:text-[2.2rem] text-white font-bold text-5xl phone:pb-5">From Our Kitchen to Your Table.</p>
                    <p data-aos="fade-in" data-aos-once="true" data-aos-delay="1000" data-aos-duration="1000" className="tracking-[5px] phone:text-[10px] text-[12px] text-white/50 font-normal uppercase">uncle wu's <span className="text-light-yellow">delights!</span></p>
                </div>
                <Link to={'/menu'} data-aos="fade-in" data-aos-once="true" data-aos-delay="2000" className='flex justify-center items-center transition-all duration-300 tablet:bottom-40 ease-in-out absolute phone:bottom-20 laptop:bottom-20 text-white'>
                    <img src={circle} style={{ animationPlayState: hovered ? 'paused' : 'running' }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className='animate-circle tablet:w-44 tablet:h-44 phone:w-36 phone:h-36 block w-48 h-48' alt="" />
                </Link>
            </div>
        </>


    )
}

export default HomePage