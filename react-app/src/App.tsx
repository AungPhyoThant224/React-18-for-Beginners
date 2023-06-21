import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "Bob",
    address: {
      city: "San Francisco",
      zipCode: 941666,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 451666 },
    });
  };

  return (
    <div>
      {customer.name} & {customer.address.zipCode}
      <button onClick={handleClick}>My button</button>
    </div>
  );
}

export default App;
