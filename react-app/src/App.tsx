import { useState } from "react";

function App() {
  const [bugs, setBug] = useState([
    { id: 1, name: "Bug 1", fixed: false },
    { id: 2, name: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    //update
    setBug(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      <button onClick={handleClick}>My button</button>
      <div>{bugs.map((bug) => bug.name)}</div>
    </div>
  );
}

export default App;
