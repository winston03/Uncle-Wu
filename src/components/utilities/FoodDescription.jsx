const FoodDescription = (props) => {

    const { image, description } = props;

    return (
        <div className="flex justify-center items-center gap-20">
            <div className="flex w-80 h-80 rounded-full flex-col bg-cover bg-center justify-center items-center" style={{ backgroundImage: `url(${circle})`, transform: `rotate(${rotateValue}deg)`, transition: 'transform 0.5s ease-out' }}>
                <img src={nasgor} className="!animate-none rounded-full w-[13rem] h-[13rem]" alt="" />
            </div>
            <p className="text-white font-inter text-xl w-[40%]">Golden grains of rice, stir-fried with fresh veggies, eggs, and savory seasonings, creating a symphony of flavors in every bite.</p>
        </div>
    )
}

export default FoodDescription