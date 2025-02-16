import { Provider } from "react-redux";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import store from "../store/store";

function App() {
  return (
    <>
      {/* we are passing store to our app */}
      <Provider store={store}>
        <Navbar />
        <Body />
      </Provider>
    </>
  );
}

export default App;
