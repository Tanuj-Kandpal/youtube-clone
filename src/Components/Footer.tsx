import { useState } from "react";

function Footer() {
  const [value, setValue] = useState([
    {
      id: 1,
      name: "TODO",
      value: "Task1",
    },
    {
      id: 2,
      name: "In Progress",
      value: "Task2",
    },
    {
      id: 3,
      name: "Completed",
      value: "Task3",
    },
    {
      id: 4,
      name: "TODO",
      value: "Task4",
    },
  ]);

  function handleTask(clickedId) {
    const updatedTasks = value.map(function (curr) {
      if (clickedId === curr.id) {
        // Update only the matching task
        if (curr.name === "TODO") {
          return { ...curr, name: "In Progress" };
        }
        if (curr.name === "In Progress") {
          return { ...curr, name: "Completed" };
        }
        // You could add additional logic for other statuses here if needed
        return curr;
      }
      // Return unchanged tasks
      return curr;
    });

    // Update the state with the new array
    setValue(updatedTasks);
    
  }
  return (
    <>
      <div>
        <h1 className="bg-red-300 rounded-2xl p-2">To Do</h1>
        <ol>
          {value.map(function (curr) {
            return (
              <button
                onClick={function () {
                  handleTask(curr.id);
                }}
                key={curr.id}
              >
                {curr.name === "TODO" ? curr.value : ""}
              </button>
            );
          })}
        </ol>
      </div>
      <div>
        <h1 className="bg-amber-400 rounded-2xl p-2">In Progress</h1>
        <ol>
          {value.map(function (curr) {
            return (
              <button
                onClick={function () {
                  handleTask(curr.id);
                }}
                key={curr.id}
              >
                {curr.name === "In Progress" ? curr.value : ""}
              </button>
            );
          })}
        </ol>
      </div>
      <div>
        <h1 className="bg-green-600 rounded-2xl p-2">Completed</h1>
        <ol>
          {value.map(function (curr) {
            return (
              <button
                onClick={function () {
                  handleTask(curr.id);
                }}
                key={curr.id}
              >
                {curr.name === "Completed" ? curr.value : ""}
              </button>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default Footer;
