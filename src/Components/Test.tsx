function Test({name}) {
  return <>
  <h1>My name is {name}</h1>
  </>;
}

function Greeting(<Test name={"tanuj"}/>: React.FC) {
  return <></>;
}

export default Test;
