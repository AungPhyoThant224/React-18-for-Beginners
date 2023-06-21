import { useState } from "react";

function App() {
  const [tags, setTag] = useState(["happy", "sad"]);

  const handleClick = () => {
    //add
    setTag([...tags, "angry"]);

    //remove
    // setTag(tags.filter((tag) => tag !== "happy"));

    //update
    // setTag(tags.map((tag) => (tag === "sad" ? "sadness" : tag)));
  };

  return (
    <div>
      <button onClick={handleClick}>My button</button>
      <div>{tags.map((tag) => tag)}</div>
    </div>
  );
}

export default App;
