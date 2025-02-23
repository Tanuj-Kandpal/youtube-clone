import { Provider } from "react-redux";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import store from "../store/store";
import { createBrowserRouter, RouterProvider } from "react-router";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "",
        element: "",
      },
    ],
  },
]);
function App() {
  return (
    <>
      {/* we are passing store to our app */}
      <Provider store={store}>
        <Navbar />
        <RouterProvider router={AppRouter} />
      </Provider>
    </>
  );
}

export default App;
