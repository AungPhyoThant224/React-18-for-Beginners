import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Tokyo", "London"];
  return (
    <ListGroup
      items={items}
      heading="Head"
      onSelectedItem={() => console.log("clicked")}
    />
  );
}

export default App;
