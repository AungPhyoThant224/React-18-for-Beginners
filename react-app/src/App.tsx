import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setShowAlert(!showAlert)}>My Alert</Alert>
      )}
      <Button color="danger" onClick={() => setShowAlert(!showAlert)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
