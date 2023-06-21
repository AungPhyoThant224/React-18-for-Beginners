import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [liked, setLike] = useState(false);

  function onClick() {
    setLike(!liked);
  }

  return (
    <div>
      <Like onClick={onClick} liked={liked} />
    </div>
  );
}

export default App;
