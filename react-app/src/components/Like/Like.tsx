import { AiFillLike } from "react-icons/ai";

interface Props {
  onClick: () => void;
  liked: boolean;
}

const Like = ({ onClick, liked }: Props) => {
  return (
    <div>
      <AiFillLike
        size="50"
        color={liked ? "blue" : "black"}
        onClick={onClick}
      />
    </div>
  );
};

export default Like;
