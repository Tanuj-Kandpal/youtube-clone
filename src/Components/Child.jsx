import React, { useState } from "react";
// Child Component
function Child(props) {
  // Function to send data to the parent
  function sendData() {
    // Call the parent's callback function provided as a prop and pass data ("Hello from Child!")
    props.sendDataToParent("Hello from Child!");
  }

  // Rendering a button that triggers sendData on click.
  return (
    <div>
      <h3>Child Component</h3>
      <button className="bg-red-400" onClick={sendData}>
        Send Data to Parent
      </button>
    </div>
  );
}
export default Child;
