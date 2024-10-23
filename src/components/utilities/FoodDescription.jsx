import '../styles/Font.css'

const FoodDescription = (props) => {
    return (
        <div className="flex justify-center items-center">
            {props.children}
        </div>
    )
}

const Image = (props) => {
    return (
        <div style={{ backgroundImage: `url(${props.image})` }} className={`absolute rounded-full ${props.width} ${props.height} bg-cover bg-center`}>
        </div>
    )
}

const Circle = (props) => {
    return (
        <div className={`flex ${props.width} ${props.height} rounded-full flex-col bg-cover bg-center justify-center items-center`} style={{ backgroundImage: `url(${props.image})`, transform: `rotate(${props.rotateValue}deg)`, transition: 'transform 1s ease-out' }}>
            {props.children}
        </div>
    )
}

const Description = (props) => {
    return (
        <p className="text-white font-kelvinch text-xl w-[40%]">{props.description}</p>
    )
}

FoodDescription.Image = Image
FoodDescription.Circle = Circle
FoodDescription.Description = Description

export default FoodDescription