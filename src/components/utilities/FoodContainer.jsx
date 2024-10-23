import '../styles/Font.css'

const FoodContainer = (props) => {
    return (
        <div className="flex justify-around items-center px-36 gap-20">
            {props.children}
        </div>
    )
}

const FoodDecoration = (props) => {
    return (
        <div className="flex justify-center items-center">
            {props.children}
        </div>
    )
}

const Image = (props) => {
    return (
        <div style={{ backgroundImage: `url(${props.image})` }} className={`cursor-pointer absolute rounded-full ${props.width} ${props.height} bg-cover bg-center`}>
        </div>
    )
}

const Circle = (props) => {
    return (
        <div className={`flex ${props.width} ${props.height} rounded-full flex-col bg-cover bg-center justify-center items-center`} style={{ backgroundImage: `url(${props.image})`, transform: `rotate(${props.rotateValue}deg)`, transition: 'transform 1s ease-out' }}></div>
    )
}

const Description = (props) => {
    return (
        <div className="flex flex-col gap-10 ">
            <p className='font-kelvinch text-white text-4xl'>{props.title}</p>
            <p className="text-white font-kelvinch text-xl">{props.description}</p>
        </div>
    )
}

FoodContainer.Image = Image
FoodContainer.Circle = Circle
FoodContainer.Description = Description
FoodContainer.FoodDecoration = FoodDecoration


export default FoodContainer