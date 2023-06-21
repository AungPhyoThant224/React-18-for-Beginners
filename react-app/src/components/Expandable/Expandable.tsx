import { useState } from "react";

interface Props {
  children: string;
  maxChar: number;
}

const Expandable = ({ children, maxChar = 100 }: Props) => {
  const [isExpand, setExpand] = useState(false);

  if (children.length <= 100) return <div>{children}</div>;

  let text = isExpand ? children : children.substring(0, maxChar) + "...";
  return (
    <>
      <div>{text}</div>
      <button onClick={() => setExpand(!isExpand)}>
        {isExpand ? "Less" : "More"}
      </button>
    </>
  );
};

export default Expandable;
