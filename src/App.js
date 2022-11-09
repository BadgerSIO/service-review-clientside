import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/Routes";
import "react-photo-view/dist/react-photo-view.css";

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
