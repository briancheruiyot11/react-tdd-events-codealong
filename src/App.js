import React, { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepperoniIsChecked}
        onChange={e => setPepperoniIsChecked(e.target.checked)}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>

      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepperoniIsChecked && <li>Pepperoni</li>}
      </ul>
    </div>
  );
}

export default App;

