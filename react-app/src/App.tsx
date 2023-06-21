import Button from "./components/Button";

function App() {
  function onClick() {
    console.log("clicked");
  }

  return (
    <Button color="danger" onClick={onClick}>
      My Button
    </Button>
  );
}

export default App;
