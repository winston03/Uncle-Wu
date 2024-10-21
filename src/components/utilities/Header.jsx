import logo from '../../assets/image/logo.png'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    const { animation, delay } = props

    return (
        <>
            <header data-aos={(animation)} data-aos-once="true" data-aos-delay={(delay)} className="fixed w-full h-20 flex justify-center items-center">
                <img src={logo} alt="" width={130} height={130} className="cursor-pointer absolute left-10" />
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