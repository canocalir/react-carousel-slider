import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Arrow } from "../styled";

const DirectionArrow = ({ type, setImageIndex, imageIndex, images }) => {

  const minus = () => {
    return imageIndex > 0 ? setImageIndex((current) => current - 1) : setImageIndex(images.length);
  }

  const plus = () => {
    return imageIndex === images.length ? setImageIndex(0) : setImageIndex((current) => current + 1);
  };

  const conditionalArrow = () => {
    if (type === "prev") return <BsFillArrowLeftCircleFill onClick={minus} />;
    if (type === "next") return <BsFillArrowRightCircleFill onClick={plus} />;
  };

  return <Arrow>{conditionalArrow()}</Arrow>;
};

export default DirectionArrow;
