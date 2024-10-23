import Header from "../utilities/Header"
import React, { useEffect, useState } from 'react';
import circle from '../../assets/image/circle.png'
import friedrice from '../../assets/image/friedrice.jpg'
import chickenfriedrice from '../../assets/image/chickenfriedrice.jpg'
import bbqporkrice from '../../assets/image/bbqporkrice.jpg'
import indomie from '../../assets/image/indomie.jpg'
import saltedeggchickenrice from '../../assets/image/saltedeggchickenrice.jpg'
import arrow from '../../assets/image/arrow.png'
import '../styles/CustomScrollBar.css'
import '../styles/Font.css'
import CircleMoveLeft from "../utilities/CircleMoveLeft";
import CircleMoveRight from "../utilities/CircleMoveRight";


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

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="">
            <Header />
            <button onClick={() => ScrollToTop()}
                className={`fixed -rotate-90 z-10 bottom-10 right-10 cursor-pointer ${isVisible ? 'translate-y-0' : 'translate-y-20 opacity-0'} transition-all duration-1000 ease-in-out
            }`}><img width={70} height={70} src={arrow} alt="" /></button>
            <div className="w-full h-full pb-32 bg-fixed bg-cover bg-center flex flex-col justify-center font-inter items-center bg-no-repeat bg-menubg backdrop-blur-2xl">
                <p className="text-white font-kelvinch text-3xl mt-48 mb-36">We Serve..</p>
                <CircleMoveLeft
                    rotateValue={rotateValue}
                    imagecircle={circle}
                    image={friedrice}
                    widthcircle="w-[25rem]"
                    heightcircle="h-[25rem]"
                    widthimage="w-[16.5rem]"
                    heightimage="h-[16.5rem]"
                    title="Fried Rice"
                    description="A dish of seasoned rice, usually served with meat, or vegetables, and sometimes other condiments, such as soy sauce, vinegar, and garlic."
                />
                <CircleMoveRight
                    rotateValue={-rotateValue}
                    imagecircle={circle}
                    image={chickenfriedrice}
                    widthcircle="w-[25rem]"
                    heightcircle="h-[25rem]"
                    widthimage="w-[16.5rem]"
                    heightimage="h-[16.5rem]"
                    title="Chicken Fried Rice"
                    description="Chicken fried rice combines tender chicken, cold day-old rice, scrambled eggs, garlic, soy sauce, sesame oil, and vibrant veggies like carrots and peas, stir-fried to perfection and garnished with green onions for a savory, flavorful meal that’s both comforting and delicious."
                />
                <CircleMoveLeft
                    rotateValue={rotateValue}
                    imagecircle={circle}
                    image={bbqporkrice}
                    widthcircle="w-[25rem]"
                    heightcircle="h-[25rem]"
                    widthimage="w-[16.5rem]"
                    heightimage="h-[16.5rem]"
                    title="BBQ Pork Rice"
                    description="BBQ pork rice combines smoky, sweet BBQ pork, cold rice, scrambled eggs, garlic, soy sauce, and veggies like peas and carrots, stir-fried to perfection for a flavorful, hearty meal."
                />
                <CircleMoveRight
                    rotateValue={-rotateValue}
                    imagecircle={circle}
                    image={indomie}
                    widthcircle="w-[25rem]"
                    heightcircle="h-[25rem]"
                    widthimage="w-[16.5rem]"
                    heightimage="h-[16.5rem]"
                    title="Indomie"
                    description="Indomie is a popular instant noodle brand loved for its quick preparation and bold flavors. The chewy noodles are seasoned with soy sauce, garlic, and spices, creating a rich taste."
                />
                <CircleMoveLeft
                    rotateValue={rotateValue}
                    imagecircle={circle}
                    image={saltedeggchickenrice}
                    widthcircle="w-[25rem]"
                    heightcircle="h-[25rem]"
                    widthimage="w-[16.5rem]"
                    heightimage="h-[16.5rem]"
                    title="Salted Egg Chicken Rice"
                    description="Salted egg chicken rice features tender, crispy chicken smothered in a creamy salted egg sauce, served over fragrant jasmine rice. With its rich flavors and satisfying texture, this dish offers a delicious twist that keeps people coming back for more."
                />
                {/* <br /><br /><br /><br /> */}
            </div>
        </div>
    )
}
export default MenuPage