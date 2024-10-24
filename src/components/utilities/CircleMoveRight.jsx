import FoodContainer from "./FoodContainer"

const CircleMoveRight = (props) => {
    return (
        <FoodContainer dataaos={props.dataaos} dataaosdelay={props.dataaosdelay} dataaosonce={props.dataaosonce}>
            <FoodContainer.Description title={props.title} description={props.description} />
            <FoodContainer.FoodDecoration>
                <FoodContainer.Circle width={props.widthcircle} height={props.heightcircle} image={props.imagecircle} rotateValue={props.rotateValue} />
                <FoodContainer.Image image={props.image} width={props.widthimage} height={props.heightimage} />
            </FoodContainer.FoodDecoration>
        </FoodContainer>
    )
}

export default CircleMoveRight