import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from '../utilities/Header';
import { Link } from 'react-router-dom'
import React from 'react'
import circle from '../../assets/image/activecircle.png'

const HomePage = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Header animation="fade-down" delay="1500" />
            <div className="w-full h-screen bg-cover bg-center flex flex-col justify-center font-inter items-center bg-no-repeat bg-homebg">
                <div className="w-96 h-96 bg-white/10 blur-3xl rounded-full absolute -top-28 -left-28"></div>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <p data-aos="fade-in" data-aos-once="true" className="text-white font-bold text-5xl">From Our Kitchen to Your Table.</p>
                    <p data-aos="fade-in" data-aos-once="true" data-aos-delay="1000" data-aos-duration="1000" className="tracking-[5px] text-[12px] text-white/50 font-normal uppercase">uncle wu's <span className="text-yellow-100">delights!</span></p>
                </div>
                <Link to={'/menu'} className='flex justify-center items-center hover:brightness-75 transition-all duration-300 ease-in-out absolute bottom-20 text-white'>
                    <img src={circle} className='animate-circle block w-48 h-48' alt="" />
                </Link>
            </div>
        </>


    )
}

export default HomePage