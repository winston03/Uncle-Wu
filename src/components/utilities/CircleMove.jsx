import FoodDescription from "./FoodDescription"

const CircleMove = (props) => {
    return (
        <FoodDescription>
            <FoodDescription.Circle width={props.widthcircle} height={props.heightcircle} image={props.imagecircle} rotateValue={props.rotateValue}>
            </FoodDescription.Circle>
            <FoodDescription.Image image={props.image} width={props.widthimage} height={props.heightimage} />
        </FoodDescription>
    )
}

export default CircleMove