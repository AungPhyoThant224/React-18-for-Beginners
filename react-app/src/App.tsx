import { useState } from "react";
import produce from "immer";

function App() {
  const [bugs, setBug] = useState([
    { id: 1, name: "Bug 1", fixed: false },
    { id: 2, name: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    //update
    // setBug(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBug(
      produce((draft) => {
        let bug = draft.find((bug) => bug.id === 1);
        if (bug) {
          bug.fixed = true;
        }
      })
    );
  };

  return (
    <div>
      <button onClick={handleClick}>My button</button>
      <div>
        {bugs.map((bug) => (
          <p>
            {bug.name} {bug.fixed ? "Fixed" : "New"}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
