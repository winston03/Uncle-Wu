import whitelogo from '../../assets/image/whiteunclewu.png'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Header = (props) => {
    const { animation, delay, once } = props
    const [blur, setBlur] = useState(0)

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setBlur(scrollPosition / 10);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);



    }, []);

    return (
        <>
            <header data-aos={(animation)} data-aos-once={(once)} data-aos-delay={(delay)} className={`z-10 fixed w-full h-20 flex laptop:justify-center tablet:justify-end tablet:pr-16 items-center ${blur > 0 ? 'backdrop-blur-sm transition-all duration-500' : 'bg-opacity-0'}`}>
                <img src={whitelogo} alt="" width={130} height={130} className="cursor-pointer absolute left-10" />
                <ul className="flex gap-16 font-poppins font-light">
                    <NavLink className="nav-link" to={'/'}>Home</NavLink>
                    <NavLink className='nav-link' to={'/ourstory'}>Our Story</NavLink>
                    <NavLink className='nav-link' to={'/menu'}>Menu</NavLink>
                    <NavLink className='nav-link' to={'/contact'}>Contact</NavLink>
                </ul>
            </header>
        </>
    )
}

export default Header