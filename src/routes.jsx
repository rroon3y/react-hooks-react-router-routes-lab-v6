import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movies from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

import NavBar from "./components/NavBar";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/movies/:id",
    element: <Movie />,
  },
]); 

export default routes;
