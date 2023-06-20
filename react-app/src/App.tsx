import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="danger" onClick={() => console.log("clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
