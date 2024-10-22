import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from '../utilities/Header';
import { Link } from 'react-router-dom'

const HomePage = () => {


    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);




    return (
        <>
            <Header animation="fade-down" delay="1500" />
            <div className="w-full h-screen bg-cover bg-center flex justify-center font-inter items-center bg-no-repeat bg-homebg">
                <div className="w-96 h-96 bg-white/10 blur-3xl rounded-full absolute -top-28 -left-28"></div>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <p data-aos="fade-in" data-aos-once="true" className="text-white font-bold text-5xl">From Our Kitchen to Your Table.</p>
                    <p data-aos="fade-in" data-aos-once="true" data-aos-delay="1000" data-aos-duration="1000" className="tracking-[5px] text-[12px] text-white/50 font-normal uppercase">uncle wu's <span className="text-yellow-100">delights!</span></p>
                    <Link data-aos="fade-in" data-aos-once="true" data-aos-delay="1000" data-aos-duration="1000" to={'/menu'} className='animate-float hover:bg-yellow-100/40 bg-yellow-100/30 border-none border outline-none block text-yellow-100 font-normal py-2 px-5 mt-5'>
                        View Menu
                    </Link>

                </div>
            </div>
        </>


    )
}

export default HomePage