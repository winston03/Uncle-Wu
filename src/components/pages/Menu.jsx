import Header from "../utilities/Header"
import React, { useEffect, useState } from 'react';
import circle from '../../assets/image/circle.png'
import friedrice from '../../assets/image/friedrice.jpg'
import chickenfriedrice from '../../assets/image/chickenfriedrice.jpg'
import bbqporkrice from '../../assets/image/bbqporkrice.jpg'
import indomie from '../../assets/image/indomie.jpg'
import saltedeggchickenrice from '../../assets/image/saltedeggchickenrice.jpg'
import '../styles/CustomScrollBar.css'
import '../styles/Font.css'
import CircleMoveLeft from "../utilities/CircleMoveLeft";
import CircleMoveRight from "../utilities/CircleMoveRight";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTopBtn from "../utilities/ScrollToTopBtn";


const MenuPage = () => {

    const [rotateValue, setRotateValue] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Function to handle scroll event
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setRotateValue(scrollPosition / 20); // Adjust rotation sensitivity

        if (window.scrollY > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        AOS.init({ duration: 2000 });

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <Header />
            <ScrollToTopBtn onClick={ScrollToTop} visible={isVisible ? 'translate-y-0 opacity-50' : 'translate-y-20 opacity-0'} />
            <div className="w-full h-full laptop:pb-32 overflow-x-hidden bg-fixed bg-cover bg-center flex flex-col justify-center font-inter items-center bg-no-repeat bg-menubg backdrop-blur-2xl">
                <p data-aos="fade-in" data-aos-once="true" data-aos-delay="500" className="text-white font-kelvinch tablet:mb-24 text-3xl mt-48 mb-36">We Serve..</p>
                <CircleMoveLeft
                    dataaos="fade-right"
                    dataaosdelay="1500"
                    dataaosonce="true"
                    rotateValue={rotateValue}
                    imagecircle={circle}
                    image={friedrice}
                    widthcircle="laptop:w-[25rem]"
                    heightcircle="laptop:h-[25rem]"
                    widthimage="laptop:w-[16.5rem]"
                    heightimage="laptop:h-[16.5rem]"
                    title="Fried Rice"
                    description="A dish of seasoned rice, usually served with meat, or vegetables, and sometimes other condiments, such as soy sauce, vinegar, and garlic."
                />
                <CircleMoveRight
                    dataaos="fade-left"
                    dataaosonce="true"
                    rotateValue={-rotateValue}
                    imagecircle={circle}
                    image={chickenfriedrice}
                    widthcircle="laptop:w-[25rem]"
                    heightcircle="laptop:h-[25rem]"
                    widthimage="laptop:w-[16.5rem]"
                    heightimage="laptop:h-[16.5rem]"
                    title="Chicken Fried Rice"
                    description="Chicken fried rice combines tender chicken, cold day-old rice, scrambled eggs, garlic, soy sauce, sesame oil, and vibrant veggies like carrots and peas, stir-fried to perfection and garnished with green onions for a savory, flavorful meal that’s both comforting and delicious."
                />
                <CircleMoveLeft
                    dataaos="fade-right"
                    dataaosonce="true"
                    rotateValue={rotateValue}
                    imagecircle={circle}
                    image={bbqporkrice}
                    widthcircle="laptop:w-[25rem]"
                    heightcircle="laptop:h-[25rem]"
                    widthimage="laptop:w-[16.5rem]"
                    heightimage="laptop:h-[16.5rem]"
                    title="BBQ Pork Rice"
                    description="BBQ pork rice combines smoky, sweet BBQ pork, cold rice, scrambled eggs, garlic, soy sauce, and veggies like peas and carrots, stir-fried to perfection for a flavorful, hearty meal."
                />
                <CircleMoveRight
                    dataaos="fade-left"
                    dataaosonce="true"
                    rotateValue={-rotateValue}
                    imagecircle={circle}
                    image={indomie}
                    widthcircle="laptop:w-[25rem]"
                    heightcircle="laptop:h-[25rem]"
                    widthimage="laptop:w-[16.5rem]"
                    heightimage="laptop:h-[16.5rem]"
                    title="Indomie"
                    description="Indomie is a popular instant noodle brand loved for its quick preparation and bold flavors. The chewy noodles are seasoned with soy sauce, garlic, and spices, creating a rich taste."
                />
                <CircleMoveLeft
                    dataaos="fade-right"
                    dataaosonce="true"
                    rotateValue={rotateValue}
                    imagecircle={circle}
                    image={saltedeggchickenrice}
                    widthcircle="laptop:w-[25rem]"
                    heightcircle="laptop:h-[25rem]"
                    widthimage="laptop:w-[16.5rem]"
                    heightimage="laptop:h-[16.5rem]"
                    title="Salted Egg Chicken Rice"
                    description="Salted egg chicken rice features tender, crispy chicken smothered in a creamy salted egg sauce, served over fragrant jasmine rice. With its rich flavors and satisfying texture, this dish offers a delicious twist that keeps people coming back for more."
                />
            </div>
        </>
    )
}
export default MenuPage