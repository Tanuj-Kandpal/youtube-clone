import { useRef, useState } from "react";

function Practice() {
  //Use Ref state persists
  const input = useRef(0);

  //Use State re-renders component every time
  const [value, setValue] = useState(0);

  console.log(`rendering`);

  function handleIncrease() {
    input.current = +input.current + 1;
    console.log(input.current);
  }

  function handleState() {
    setValue(value + 1);
  }

  return ( 
    <div>
      <input className="bg-red-500" type="text" />
      {input.current}
      <button className="bg-amber-200" onClick={handleIncrease}>
        Increase
      </button>
      <div>
        <input className="bg-red-300" type="text" />
        {value}
        <button className="bg-amber-700" onClick={handleState}>
          State Increase
        </button>
      </div>
    </div>
  );
}

export default Practice;
