import { IoIosStar } from "react-icons/io";
import { StarBox, StarBoxContainer } from "./StarRating.styled";

const StarRating = ({ rating, setRating }) => {
  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <StarBoxContainer>
      {[...Array(5)].map((star, index) => (
        <StarBox
          key={index}
          className={`star ${index < rating ? "filled" : ""}`}
          onClick={() => handleStarClick(index)}
        >
          <IoIosStar />
        </StarBox>
      ))}
    </StarBoxContainer>
  );
};

export default StarRating;
