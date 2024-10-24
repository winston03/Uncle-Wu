import arrow from '../../assets/image/arrow.png'

const ScrollToTopBtn = (props) => {
    return (
        <button onClick={props.onClick}
            className={`fixed -rotate-90 tablet:bottom-12 tablet:right-12 z-10 bottom-10 right-10 cursor-pointer ${props.visible} transition-all duration-1000 ease-in-out
            }`}><img width={70} className='tablet:w-[4rem] tablet:h-[4rem]' height={70} src={arrow} alt="" /></button>
    )
}

export default ScrollToTopBtn