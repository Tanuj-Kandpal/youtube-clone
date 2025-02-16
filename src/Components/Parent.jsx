import React, { useState } from "react";
import Child from "./Child";

// Parent Component
function Parent() {
  // State to hold data received from the child
  const [message, setMessage] = useState("");

  // Callback function to handle data from the child
  function handleDataFromChild(data) {
    console.log(data);
    // 'data' is received from the child
    setMessage(data);
  }

  // Rendering the parent with the child's component embedded.
  // We pass the callback function 'handleDataFromChild' as a prop called 'sendDataToParent'
  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message from Child: {message}</p>
      <Child sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default Parent;
